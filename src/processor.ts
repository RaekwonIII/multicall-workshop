import { lookupArchive } from "@subsquid/archive-registry";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import {
  BatchContext,
  BatchProcessorItem,
  EvmLogEvent,
  SubstrateBatchProcessor,
  SubstrateBlock,
} from "@subsquid/substrate-processor";
import { In } from "typeorm";
import { BigNumber, ethers } from "ethers";
import { contractAddress, getContractEntity, MULTICALL_CONTRACT } from "./contract";
import { Owner, Token, Transfer } from "./model";
import * as exrr from "./abi/exrr";
import assert from 'assert';
import { Multicall } from "./abi/multicall";

const database = new TypeormDatabase();

assert(process.env.RPC_ENDPOINT, `RPC_ENDPOINT endpoint should be set to enable contract state queries`)

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    chain: process.env.RPC_ENDPOINT,
    archive: lookupArchive("moonbeam", { release: "FireSquid" }),
  })
  .addEvmLog(contractAddress, {
    filter: [[
      exrr.events.Transfer.topic
    ]],
  });

type Item = BatchProcessorItem<typeof processor>;
export type Context = BatchContext<Store, Item>;

processor.run(database, async (ctx) => {
  const transfersData: TransferData[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === "EVM.Log") {
        const transfer = handleTransfer(ctx, block.header, item.event);
        transfersData.push(transfer);
      }
    }
  }

  await saveTransfers(ctx, transfersData);
});

type TransferData = {
  id: string;
  from: string;
  to: string;
  token: ethers.BigNumber;
  timestamp: bigint;
  block: number;
  transactionHash: string;
};

function handleTransfer(
  ctx: Context,
  block: SubstrateBlock,
  event: EvmLogEvent
): TransferData {
  const { from, to, tokenId } = exrr.events.Transfer.decode(((event.args.log || event.args)));

  const transfer: TransferData = {
    id: event.id,
    token: tokenId,
    from,
    to,
    timestamp: BigInt(block.timestamp),
    block: block.height,
    transactionHash: event.evmTxHash,
  };

  return transfer;
}

async function saveTransfers(ctx: Context, transfersData: TransferData[]) {
  const tokensIds: Set<string> = new Set();
  const ownersIds: Set<string> = new Set();

  for (const transferData of transfersData) {
    tokensIds.add(transferData.token.toString());
    ownersIds.add(transferData.from);
    ownersIds.add(transferData.to);
  }

  const transfers: Set<Transfer> = new Set();

  const tokens: Map<string, Token> = new Map(
    (await ctx.store.findBy(Token, { id: In([...tokensIds]) })).map((token) => [
      token.id,
      token,
    ])
  );

  const owners: Map<string, Owner> = new Map(
    (await ctx.store.findBy(Owner, { id: In([...ownersIds]) })).map((owner) => [
      owner.id,
      owner,
    ])
  );

  for (const transferData of transfersData) {
    const contract = new exrr.Contract(
      ctx,
      { height: transferData.block },
      contractAddress
    );

    let from = owners.get(transferData.from);
    if (from == null) {
      from = new Owner({ id: transferData.from, balance: 0n });
      owners.set(from.id, from);
    }

    let to = owners.get(transferData.to);
    if (to == null) {
      to = new Owner({ id: transferData.to, balance: 0n });
      owners.set(to.id, to);
    }

    const tokenId = transferData.token.toString();

    let token = tokens.get(tokenId);
    if (token == null) {
      token = new Token({
        id: tokenId,
        uri: "", //await contract.tokenURI(transferData.token),
        contract: await getContractEntity(ctx),
      });
      tokens.set(token.id, token);
      // ctx.log.info(`Upserted NFT: ${token.id}`)
    }
    token.owner = to;

    const { id, block, transactionHash, timestamp } = transferData;

    const transfer = new Transfer({
      id,
      block,
      timestamp,
      transactionHash,
      from,
      to,
      token,
    });

    transfers.add(transfer);
  }

  const maxHeight = ctx.blocks[ctx.blocks.length - 1].header.height;

  const multicall = new Multicall(ctx, {height: maxHeight}, MULTICALL_CONTRACT);

  ctx.log.info(`Calling multicall for ${transfersData.length} tokens...`);

  const results = await multicall.aggregate(exrr.functions.tokenURI, contractAddress.toLowerCase(), transfersData.map(data => [BigNumber.from(data.token)] as BigNumber[]), 100);

  results.forEach((res, i) => {
    let t = tokens.get(transfersData[i].token.toString());
    if (t) {
      t.uri = res;
    }
  })
  ctx.log.info(`Done`);

  await ctx.store.save([...owners.values()]);
  await ctx.store.save([...tokens.values()]);
  await ctx.store.save([...transfers]);
}

import { Contract } from "./model";
import { Contract as ContractAPI } from "./abi/erc721";
import { Context } from "./processor";
import { BigNumber } from "ethers";

export const contractAddress = "0x8b5d62f396Ca3C6cF19803234685e693733f9779";
export const MULTICALL_CONTRACT = "0x74C3c5Ebcc6DBc313e305C6d50e51092305c1e4a";

async function createContractEntity(ctx: Context): Promise<Contract> {
  ctx.blocks[ctx.blocks.length -1]
  const contractAPI = new ContractAPI({ ...ctx, block: ctx.blocks[ctx.blocks.length -1].header }, contractAddress);
  let name = "",
    symbol = "",
    totalSupply = BigNumber.from(0);
  try {
    name = await contractAPI.name();
    symbol = await contractAPI.symbol();
    totalSupply = await contractAPI.totalSupply();
  } catch (error) {
    ctx.log.warn(
      `[API] Error while fetching Contract metadata for address ${contractAddress} using RPC node ${process.env.RPC_ENDPOINT}`
    );
    if (error instanceof Error) {
      ctx.log.warn(`${error.message}`);
    }
  }
  return new Contract({
    id: contractAddress,
    name: name,
    symbol: symbol,
    totalSupply: totalSupply.toBigInt(),
  });
}

let contractEntity: Contract | undefined;

export async function getContractEntity(ctx: Context): Promise<Contract> {
  if (contractEntity == null) {
    contractEntity = await ctx.store.get(Contract, contractAddress);
    if (contractEntity == null) {
      contractEntity = await createContractEntity(ctx);
      await ctx.store.insert(contractEntity);
    }
  }
  return contractEntity;
}

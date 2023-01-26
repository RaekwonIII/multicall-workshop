import { Store } from "@subsquid/typeorm-store";
import { Contract } from "./model";
import { Contract as ContractAPI } from "./abi/exrr";
import { Context } from "./processor";
import { BigNumber } from "ethers";

export const contractAddress = "0x104b904e19fBDa76bb864731A2C9E01E6b41f855";
// https://docs.moonbeam.network/builders/build/canonical-contracts/
export const MULTICALL_CONTRACT = "0x83e3b61886770de2F64AAcaD2724ED4f08F7f36B";

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
      `[API] Error while fetching Contract metadata for address ${contractAddress}`
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

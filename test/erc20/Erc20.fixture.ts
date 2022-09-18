import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import { Web3HelpersErc20Token, Web3HelpersErc20Token__factory } from "../../src/types";

export async function deployErc20Fixture(): Promise<{ erc20: Web3HelpersErc20Token }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const erc20Factory: Web3HelpersErc20Token__factory = <Web3HelpersErc20Token__factory>(
    await ethers.getContractFactory("Web3HelpersErc20Token")
  );
  const erc20: Web3HelpersErc20Token = <Web3HelpersErc20Token>(
    await erc20Factory.connect(admin).deploy([{ holder: admin.address, amount: 100 }], "test", "TET")
  );
  await erc20.deployed();

  return { erc20 };
}

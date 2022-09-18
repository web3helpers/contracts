import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import { Web3HelpersErc20Token, Web3HelpersErc20Token__factory } from "../../src/types";

export async function deployErc20Fixture(): Promise<{ erc20: Web3HelpersErc20Token }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const greeterFactory: Web3HelpersErc20Token__factory = <Web3HelpersErc20Token__factory>(
    await ethers.getContractFactory("Greeter")
  );
  const erc20: Web3HelpersErc20Token = <Web3HelpersErc20Token>(
    await greeterFactory.connect(admin).deploy([{ holder: admin.address, amount: 100 }], "ETST", "test")
  );
  await erc20.deployed();

  return { erc20 };
}

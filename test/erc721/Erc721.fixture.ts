import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import { Web3HelpersErc721Token, Web3HelpersErc721Token__factory } from "../../src/types";

export async function deployErc721Fixture(): Promise<{ erc721: Web3HelpersErc721Token }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const erc721Factory: Web3HelpersErc721Token__factory = <Web3HelpersErc721Token__factory>(
    await ethers.getContractFactory("Web3HelpersErc721Token")
  );
  const erc721: Web3HelpersErc721Token = <Web3HelpersErc721Token>(
    await erc721Factory.connect(admin).deploy([{ holder: admin.address, amount: 100 }], "test", "TET")
  );
  await erc721.deployed();

  return { erc721 };
}

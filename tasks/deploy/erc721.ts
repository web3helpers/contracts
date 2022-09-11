import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Web3HelpersErc721Token } from "../../src/types/contracts/Web3HelpersErc721.sol";
import { Web3HelpersErc721Token__factory } from "../../src/types/factories/contracts/Web3HelpersErc721.sol";

task("deploy:erc721").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const address = await signers[0].getAddress();
  const factory: Web3HelpersErc721Token__factory = <Web3HelpersErc721Token__factory>(
    await ethers.getContractFactory("Web3HelpersErc721Token")
  );
  const contract: Web3HelpersErc721Token = <Web3HelpersErc721Token>(
    await factory.connect(signers[0]).deploy([{ holder: address, amount: 100 }], "ETST", "test")
  );
  await contract.deployed();
  console.log(contract.address);
});

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Web3HelpersErc20Token } from "../../src/types/contracts/Web3HelpersErc20.sol";
import { Web3HelpersErc20Token__factory } from "../../src/types/factories/contracts/Web3HelpersErc20.sol";

task("deploy:erc20").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const address = await signers[0].getAddress();
  const factory: Web3HelpersErc20Token__factory = <Web3HelpersErc20Token__factory>(
    await ethers.getContractFactory("Web3HelpersErc20Token")
  );
  const contract: Web3HelpersErc20Token = <Web3HelpersErc20Token>(
    await factory.connect(signers[0]).deploy([{ holder: address, amount: 100 }], "ETST", "test")
  );
  await contract.deployed();
  console.log(contract.address);
});

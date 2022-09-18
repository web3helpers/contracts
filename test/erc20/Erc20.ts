import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { shouldBehaveLikeErc20 } from "./Erc20.behavior";
import { deployErc20Fixture } from "./Erc20.fixture";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("Erc20", function () {
    beforeEach(async function () {
      const { erc20 } = await this.loadFixture(deployErc20Fixture);
      this.erc20 = erc20;
    });
    shouldBehaveLikeErc20();
  });
});

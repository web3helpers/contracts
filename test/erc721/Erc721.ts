import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { shouldBehaveLikeErc721 } from "./Erc721.behavior";
import { deployErc721Fixture } from "./Erc721.fixture";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("deploy erc721", function () {
    beforeEach(async function () {
      const { erc721 } = await this.loadFixture(deployErc721Fixture);
      this.erc721 = erc721;
    });
    shouldBehaveLikeErc721();
  });
});

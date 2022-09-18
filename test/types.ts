import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { Web3HelpersErc20Token, Web3HelpersErc721Token } from "../src/types/";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    erc20: Web3HelpersErc20Token;
    erc721: Web3HelpersErc721Token;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}

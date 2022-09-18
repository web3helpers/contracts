import { expect } from "chai";

export function shouldBehaveLikeErc20(): void {
  it("check contract initial state", async function () {
    expect(await this.erc20.balanceOf(this.signers.admin.address)).to.equal(100);
    expect(await this.erc20.name()).to.equal("test");
  });
}

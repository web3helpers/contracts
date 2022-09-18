import { expect } from "chai";

export function shouldBehaveLikeErc721(): void {
  it("should return the right balance", async function () {
    expect(await this.erc721.balanceOf(this.signers.admin.address)).to.equal(100);
  });
}

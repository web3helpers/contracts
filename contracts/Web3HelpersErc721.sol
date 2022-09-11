//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Web3HelpersErc721Token is ERC721 {
    struct InitialHolder {
        address holder;
        uint256 amount;
    }

    constructor(
        InitialHolder[] memory initialHolders_,
        string memory name_,
        string memory symbol_
    ) ERC721(name_, symbol_) {
        for (uint256 i = 0; i < initialHolders_.length; i++) {
            for (uint256 j = 0; j < initialHolders_[i].amount; j++) {
                _safeMint(initialHolders_[i].holder, j);
            }
        }
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "";
    }
}

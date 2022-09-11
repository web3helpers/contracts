//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Web3HelpersErc20Token is ERC20 {
    struct InitialHolder {
        address holder;
        uint256 amount;
    }

    constructor(
        InitialHolder[] memory initialHolders_,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        for (uint256 i = 0; i < initialHolders_.length; i++) {
            _mint(initialHolders_[i].holder, initialHolders_[i].amount);
        }
    }
}

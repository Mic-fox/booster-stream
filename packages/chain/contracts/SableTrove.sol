//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";
 
contract SableTrove is ERC1155PresetMinterPauser {
    constructor(string memory uri_) ERC1155PresetMinterPauser(uri_) {
    }
}
//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// TODO: implement ERC1155PresetMinterPauser
 
contract SableTrove is ERC1155 {
    constructor(string memory uri_) ERC1155(uri_) {
    }
}

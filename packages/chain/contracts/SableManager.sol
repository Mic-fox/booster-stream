//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

contract SableManager {
  mapping (address => bool) private _approvedToken;
  
  constructor() public {

  }
}
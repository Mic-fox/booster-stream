import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { tokenSettings } from "./test.settings";

describe("Greeter", () => {
  let investor: SignerWithAddress;
  let bundleOwner: SignerWithAddress;
  let user: SignerWithAddress;

  let boosterStreamInstance: Contract;
  let mockDaiInstance: Contract;

  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    investor = accounts[1]
    bundleOwner = accounts[2]
    user = accounts[3]

    

    const MockDaiArtifacts = await ethers.getContractFactory("MockDai");
    mockDaiInstance = await MockDaiArtifacts.deploy(
      tokenSettings.dai.name,
      tokenSettings.dai.symbol,
      tokenSettings.dai.decimals,);

    const boosterStreamArtifacts = await ethers.getContractFactory("BoosterStream");
    boosterStreamInstance = await boosterStreamArtifacts.deploy();
  })

  it("Deploys booster correctly")

  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("BoosterStream");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });
});

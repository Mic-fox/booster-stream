import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { MockContract, smock } from '@defi-wonderland/smock';
import chai, { expect, assert } from "chai"
import { ethers } from "hardhat"
import { tokenSettings } from "./test.settings"

chai.should(); // if you like should syntax
chai.use(smock.matchers);

describe("SableTrove", () => {
  let investor: SignerWithAddress
  let bundleOwner: SignerWithAddress
  let user: SignerWithAddress

  let sableTroveInstance: Contract
  let mockDaiInstance: MockContract<Contract>

  beforeEach(async () => {
    const accounts = await ethers.getSigners()
    investor = accounts[1]
    bundleOwner = accounts[2]
    user = accounts[3]

    const MockDaiFactory = await smock.mock('MockDai');
    mockDaiInstance = await MockDaiFactory.deploy(
      tokenSettings.dai.name,
      tokenSettings.dai.symbol
    )

    const sableTroveArtifacts = await ethers.getContractFactory("SableTrove")
    sableTroveInstance = await sableTroveArtifacts.deploy(
      tokenSettings.trove.uri
    )
  })

  it("Deploys Trove correctly", async () => {
    assert.exists(sableTroveInstance.address, "Contract not deployed")
  })

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
})

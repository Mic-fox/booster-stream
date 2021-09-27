import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { MockContract, smock } from '@defi-wonderland/smock';
import chai, { expect, assert } from "chai"
import { ethers } from "hardhat"
import { tokenSettings } from "./test.settings"
import { BigNumber } from "@ethersproject/bignumber";

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

  it("Allows mocking balance", async () => {
    let balance: BigNumber[] = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(0))
    await mockDaiInstance.setVariable('_balances', { [user.address]: 1234 })
    balance = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(1234))
  })

  it("Should deduct balances as expected", async () => {
    await mockDaiInstance.setVariable('_balances', { [user.address]: 1234 })
    let balance: BigNumber[] = await mockDaiInstance.functions.balanceOf(user.address)
    console.log(balance[0])
    assert.isTrue(balance[0].eq(1234))

    await mockDaiInstance.functions.transfer(bundleOwner.address, 1)

    balance = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(1233))


    balance = await mockDaiInstance.functions.balanceOf(bundleOwner.address)
    assert.isTrue(balance[0].eq(1))
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

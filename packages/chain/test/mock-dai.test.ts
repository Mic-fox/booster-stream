import { MockContract, smock } from "@defi-wonderland/smock"
import { Contract } from "@ethersproject/contracts"
import { tokenSettings } from "./test.settings"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import chai, { assert } from "chai"
import { ethers } from "hardhat"
import { BigNumber } from "@ethersproject/bignumber"

chai.should() // if you like should syntax
chai.use(smock.matchers)

export const mintForAccounts = async (
  mockDaiInstance: MockContract<Contract>,
  accounts: SignerWithAddress[],
  amount: BigNumber = tokenSettings.dai.initialMint
) => {
  await Promise.all([
    ...accounts.map(async account => await mockDaiInstance.setVariable("_balances", { [account.address]: amount }))
  ])
}

describe("MockDai", () => {
  let bundleOwner: SignerWithAddress
  let user: SignerWithAddress

  let mockDaiInstance: MockContract<Contract>

  beforeEach(async () => {
    const accounts = await ethers.getSigners()
    bundleOwner = accounts[2]
    user = accounts[3]

    const MockDaiFactory = await smock.mock("MockDai")
    mockDaiInstance = await MockDaiFactory.deploy(
      tokenSettings.dai.name,
      tokenSettings.dai.symbol
    )
  })

  it("Deploys Mock dai", async () => {
    assert.exists(mockDaiInstance.address, "Contract not deployed")
  })

  it("Sets mocks balance correctly", async () => {
    let balance: BigNumber[] = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(0))
    
    await mockDaiInstance.setVariable("_balances", { [user.address]: 1234 })
    balance = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(1234))
  })

  it("Should deduct balances as expected", async () => {
    await mockDaiInstance.setVariable("_balances", { [user.address]: 1234 })
    let balance: BigNumber[] = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(1234))

    await mockDaiInstance.connect(user).functions.transfer(bundleOwner.address, 1)

    balance = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(balance[0].eq(1233))

    balance = await mockDaiInstance.functions.balanceOf(bundleOwner.address)
    assert.isTrue(balance[0].eq(1))
  })

  it("Should initialize all addresses correctly", async () => {
    const MockDaiFactory = await smock.mock("MockDai")
    mockDaiInstance = await MockDaiFactory.deploy(
      tokenSettings.dai.name,
      tokenSettings.dai.symbol
    )
    let userBalance: BigNumber[] = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(userBalance[0].eq(0))

    let bundleOwnerBalance: BigNumber[] = await mockDaiInstance.functions.balanceOf(bundleOwner.address)
    assert.isTrue(bundleOwnerBalance[0].eq(0))

    await mintForAccounts(mockDaiInstance, [
      bundleOwner,
      user
    ])

    userBalance = await mockDaiInstance.functions.balanceOf(user.address)
    assert.isTrue(userBalance[0].eq(tokenSettings.dai.initialMint))

    bundleOwnerBalance = await mockDaiInstance.functions.balanceOf(bundleOwner.address)
    assert.isTrue(bundleOwnerBalance[0].eq(tokenSettings.dai.initialMint))
  })

})

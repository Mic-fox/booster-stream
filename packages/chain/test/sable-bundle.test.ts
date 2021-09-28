import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { MockContract, smock } from "@defi-wonderland/smock"
import chai, { assert } from "chai"
import { ethers } from "hardhat"
import { tokenSettings } from "./test.settings"
import { mintForAccounts } from "./mock-dai.test"

chai.should() // if you like should syntax
chai.use(smock.matchers)

describe("SableManager", () => {
  let investor: SignerWithAddress
  let bundleOwner: SignerWithAddress
  let user: SignerWithAddress

  let sableTroveInstance: Contract
  let sableManagerInstance: Contract
  let mockDaiInstance: MockContract<Contract>

  beforeEach(async () => {
    const accounts = await ethers.getSigners()
    investor = accounts[1]
    bundleOwner = accounts[2]
    user = accounts[3]

    const MockDaiFactory = await smock.mock("MockDai")
    mockDaiInstance = await MockDaiFactory.deploy(
      tokenSettings.dai.name,
      tokenSettings.dai.symbol
    )

    await mintForAccounts(mockDaiInstance, [
      investor,
      bundleOwner,
      user
    ])

    const sableTroveArtifacts = await ethers.getContractFactory("SableTrove")
    sableTroveInstance = await sableTroveArtifacts.deploy(
      tokenSettings.trove.uri
    )

    const sableManagerArtifacts = await ethers.getContractFactory("SableManager")
    sableManagerInstance = await sableManagerArtifacts.deploy()
  })

  it("Deploys Trove correctly", async () => {
    assert.exists(sableTroveInstance.address, "Contract not deployed")
  })


  it("Deploys Manager correctly", async () => {
    assert.exists(sableManagerInstance.address, "Contract not deployed")
  })
})

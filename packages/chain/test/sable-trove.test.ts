import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { MockContract, smock } from "@defi-wonderland/smock"
import chai, { assert } from "chai"
import { ethers } from "hardhat"
import { tokenSettings } from "./test.settings"
import { mintForAccounts } from "./mock-dai.test"

chai.should() // if you like should syntax
chai.use(smock.matchers)

describe("SableTrove", () => {
  let minter: SignerWithAddress
  let bundleOwner: SignerWithAddress
  let user: SignerWithAddress

  let sableTroveInstance: Contract
  let mockDaiInstance: MockContract<Contract>

  beforeEach(async () => {
    const accounts = await ethers.getSigners()
    minter = accounts[1]
    bundleOwner = accounts[2]
    user = accounts[3]

    const MockDaiFactory = await smock.mock("MockDai")
    mockDaiInstance = await MockDaiFactory.deploy(
      tokenSettings.dai.name,
      tokenSettings.dai.symbol
    )

    await mintForAccounts(mockDaiInstance, [
      minter,
      bundleOwner,
      user
    ])

    const sableTroveArtifacts = await ethers.getContractFactory("SableTrove")
    sableTroveInstance = await sableTroveArtifacts.deploy(
      tokenSettings.trove.uri
    )
  })

  describe("Initialised tests", () => {
    it("Deploys Trove correctly", async () => {
      assert.exists(sableTroveInstance.address, "Contract not deployed")
    })
  })

  describe("ERC1155 functionality", () => {
    describe("View functions", () => {
      it("balanceOf")
      it("balanceOfBatch")
      it("isApprovedForAll")
    })

    describe("Events", () => {
      it("Emits TransferSingle")
      it("Emits TransferBatch")
      it("Emits ApprovalForAll")
      it("Emits URI")
    })
  })

  describe("ERC1155PresetMinterPauser", () => {
    it("sets deployer as admin & minter")
    it("sets deployer deployer can set minter account as minter")

    it("should allow minter account to batch mint new tokens to themselves")
  })
})

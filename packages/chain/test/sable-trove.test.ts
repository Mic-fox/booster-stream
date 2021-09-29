import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { MockContract, smock } from "@defi-wonderland/smock"
import chai, { assert } from "chai"
import { ethers } from "hardhat"
import { tokenSettings } from "./test.settings"
import { mintForAccounts } from "./mock-dai.test"
import { keccak256 } from "@ethersproject/keccak256"
import { toUtf8Bytes } from "ethers/lib/utils"
import { BigNumber } from "@ethersproject/bignumber"

chai.should() // if you like should syntax
chai.use(smock.matchers)

describe("SableTrove", () => {
  let deployer: SignerWithAddress
  let minter: SignerWithAddress
  let bundleOwner: SignerWithAddress
  let user: SignerWithAddress

  let sableTroveInstance: Contract
  let mockDaiInstance: MockContract<Contract>

  beforeEach(async () => {
    const accounts = await ethers.getSigners()
    deployer = accounts[0]
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
    it("sets deployer as admin & minter", async () => {
      const isDeployerAdmin = await sableTroveInstance.functions.hasRole("0x0000000000000000000000000000000000000000000000000000000000000000", deployer.address)
      assert.isTrue(isDeployerAdmin[0], "Deployer isn't admin")

      const isDeployerMinter = await sableTroveInstance.functions.hasRole(keccak256(toUtf8Bytes("MINTER_ROLE")),  deployer.address)
      assert.isTrue(isDeployerMinter[0], "Deployer isn't minter")

      const isDeployerPauser = await sableTroveInstance.functions.hasRole(keccak256(toUtf8Bytes("PAUSER_ROLE")),  deployer.address)
      assert.isTrue(isDeployerPauser[0], "Deployer isn't pauser")
    })

    it("deployer can set minter account as minter", async () => {
      let isMinterMinter = await sableTroveInstance.functions.hasRole(keccak256(toUtf8Bytes("MINTER_ROLE")),  minter.address)
      assert.isFalse(isMinterMinter[0], "Minter is minter")

      await sableTroveInstance.functions.grantRole(keccak256(toUtf8Bytes("MINTER_ROLE")), minter.address)
      
      isMinterMinter = await sableTroveInstance.functions.hasRole(keccak256(toUtf8Bytes("MINTER_ROLE")),  minter.address)
      assert.isTrue(isMinterMinter[0], "Minter isn't minter")
    })

    it("should allow minter account to batch mint new tokens to themselves")
  })
})

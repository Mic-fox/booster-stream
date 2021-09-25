import { parseUnits } from "@ethersproject/units"

export const tokenSettings = {
  dai: {
    name: "DAI",
    symbol: "DAI",
    decimals: 18,
    initialMint: parseUnits("1000", 18)
  }
}


import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"

export interface ISableAsset {
  id: string
  name: string
  image?: string
  state: "claimed" | "available" | "unavailable" | "default"
}

export interface ISableBundle {
  id: string
  name: string
  publisher: string // Content creator address
  assets: ISableAsset[]
  releaseData: Date
}

export type SableBundleContext = {
  bundles: ISableBundle[]
}

type SableBundleProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

const SableBundleContext = React.createContext<
SableBundleContext | undefined
>(undefined)

const SableBundleProvider = ({ children }: SableBundleProviderProps) => {
  const { isAuthenticated } = useMoralis()
  const [bundles, setBundles] = useState<ISableBundle[]>([])

  // TODO get bundles on load

  useEffect(() => {
    if (isAuthenticated) {
      // TODO update bundles
    }
  }, [isAuthenticated])

  return (
    <SableBundleContext.Provider
      value={{
        bundles, // Since the key of this object is the same name & type as the value I'm giving it, you can skip writing bundles: bundles
      }}
    >
      {children}
    </SableBundleContext.Provider>
  )
}

function useSableBundleContext() {
  const context = React.useContext(SableBundleContext)
  if (context === undefined) {
    throw new Error(
      "useSableBundleContext must be used within a SableBundleProvider",
    )
  }
  return context
}

export { SableBundleProvider, useSableBundleContext }

import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"

export type SableAssetID = string

export interface ISableAsset {
  id: SableAssetID
  name: string
  image?: string
  state: "claimed" | "available" | "unavailable" | "default"
}

export interface ISableBundle {
  id: string
  name: string
  publisher: string // Content creator address
  assets: SableAssetID[] | ISableAsset[]
  releaseData: Date
}

export type SableBundleContext = {
  assets: ISableAsset[]
  bundles: ISableBundle[]
}

type SableBundleProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

const SableBundleContext = React.createContext<
SableBundleContext | undefined
>(undefined)

const mockAssets: ISableAsset[] = [
  {
    id: "0x1",
    name: "Dimmer switch simulator 2022",
    state: "default",
    image: "https://veti.co.za/wp-content/uploads/2018/12/V4014RSBGM-WEB.jpg"
  },
  {
    id: "0x2",
    name: "three-cats",
    state: "default",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/White_Bear_Black_Mirror.png/170px-White_Bear_Black_Mirror.png"
  },
  {
    id: "0x3",
    name: "Way of the Hoof-Cleaner",
    state: "available",
    image: "https://thumbs.dreamstime.com/b/horseshoe-eps-vector-image-illustration-beautiful-designed-horse-shoe-clipart-silhouette-cricut-design-space-223152921.jpg"
  },
  {
    id: "0x4",
    name: "Hammers vs Mallets 5: Stopping time",
    state: "claimed",
    image: "https://d4c5gb8slvq7w.cloudfront.net/eyJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiaGVpZ2h0IjozOTR9fSwiYnVja2V0IjoiZmluZXdvb2R3b3JraW5nLnMzLnRhdW50b25jbG91ZC5jb20iLCJrZXkiOiJhcHBcL3VwbG9hZHNcLzIwMjBcLzA0XC8wMzEzNDk1MFwvYmVuLXN0cmFub3MtbWFsbGV0cy1hbmQtaGFtbWVycy5qcGcifQ=="
  },
  {
    id: "0x5",
    name: "A Wrench named Baxter",
    state: "available",
    image: "https://www.forcetools.co.za/wp-content/uploads/2018/10/68408-web.jpg"
  },
  {
    id: "0x6",
    name: "Pong 3D: An interactive novel",
    state: "available",
    image: "https://www.thexboxhub.com/wp-content/uploads/2019/11/image.png"
  },
  {
    id: "0x7",
    name: "Grand Accounting: Ghosts of tulips",
    state: "available",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tulips-1615235309.jpg?crop=0.670xw:1.00xh;0.327xw,0&resize=640:*"
  },
  {
    id: "0x8",
    name: "2007 Kia Sedona - Remastered",
    state: "available",
    image: "https://i2.cdn.turner.com/money/galleries/2011/autos/1108/gallery.kelley_blue_book_back_to_school_cars/images/2007-kia-sedona.jpg"
  }
]

const SableBundleProvider = ({ children }: SableBundleProviderProps) => {
  const { isAuthenticated } = useMoralis()

  const [assets, setAssets] = useState<ISableAsset[]>(mockAssets)
  const [bundles, setBundles] = useState<ISableBundle[]>([
    {
      id: "0x1",
      name: "Greatest games ever Vol.4",
      publisher: "0xC0FFEEC0FFEEC0FFEEC0FFEEC0FFEEC0FFEEC0FF",
      releaseData: new Date(),
      assets: mockAssets
    }
  ])

  // TODO get bundles on load

  useEffect(() => {
    if (isAuthenticated) {
      // TODO update bundles
    }
  }, [isAuthenticated])

  return (
    <SableBundleContext.Provider
      value={{
        assets,
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

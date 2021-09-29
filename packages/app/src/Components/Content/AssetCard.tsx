import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import clsx from "clsx"
import { ISableAsset, SableAssetID, useSableBundleContext } from '../../Contexts/SableBundleContext';

export interface IAssetCard {
  asset: ISableAsset | SableAssetID
  onClaim?: () => void
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  buttons: {
   "&.hidden": {

   }
  }
}))

const AssetCard = ({ asset, onClaim }: IAssetCard) => {
  const classes = useStyles()
  const { assets } = useSableBundleContext()

  const target = useMemo(() => {
    if ((asset as ISableAsset).id) {
      return asset
    } else {
      return assets.find(fetchedAsset )
    }
  }, [asset])

  return (
    <article className={classes.root}>
      <section>
        {
          asset.image && <img src={asset.image} />
        }
      </section>
      <Typography variant="h4" component="h3">
        {
          asset.name
        }
      </Typography>
      <section className={clsx(classes.buttons, {
        "hidden": asset.state === "unavailable" || asset.state === "default"
      })}>
        {
          asset.state === "unavailable" && (
            <Button variant="contained" disabled>
              Unavailable
            </Button>
          )
        }
        {
          asset.state === "available" && onClaim && (
            <Button onClick={onClaim} variant="contained">
              Claim
            </Button>
          )
        }
        {
          asset.state === "claimed" && (
            <Button variant="contained" disabled>
              Claimed
            </Button>
          )
        }
      </section>
    </article>
  )
}

export default AssetCard
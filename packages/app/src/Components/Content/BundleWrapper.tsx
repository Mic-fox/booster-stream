import { makeStyles, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { ISableAsset, useSableBundleContext } from '../../Contexts/SableBundleContext';
import clsx from "clsx"
import AssetCard from './AssetCard';

interface IBundleWrapper {
  className?: string
  bundleId: string
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  cardArea: {

  }
}))

const BundleWrapper = ({ bundleId, className }: IBundleWrapper) => {
  const classes = useStyles()
  const { bundles } = useSableBundleContext()

  const target = useMemo(() => {
    return bundles.find(item => item.id === bundleId)
  }, [bundles, bundleId])

  return (
    <section className={clsx(classes.root, className)}>
      <Typography component="p" variant="h4">
        {
          target.name
        }
      </Typography>
      <div className={classes.cardArea}>
        {
          target.assets.map((asset: ISableAsset, index: number) => <AssetCard key={`card-index-${index}`} asset={asset} />)
        }
      </div>
    </section>
  )
}

export default BundleWrapper
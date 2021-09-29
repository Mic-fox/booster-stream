import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSableBundleContext } from '../../Contexts/SableBundleContext';
import clsx from "clsx"

interface IBundleWrapper {
  className?: string
  bundleId: string
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
}))

const BundleWrapper = ({ bundleId, className }: IBundleWrapper) => {
  const classes = useStyles()
  const { bundles } = useSableBundleContext()

  return (
    <section className={clsx(classes.root, className)}>
      BundleWrapper
      <Typography component="p" variant="h4">
        {
          bundles.find(item => item.id === bundleId).name
        }
      </Typography>
    </section>
  )
}

export default BundleWrapper
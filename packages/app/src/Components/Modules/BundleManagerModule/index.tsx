import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSableBundleContext } from '../../../Contexts/SableBundleContext';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
}))

const BundleManagerModule = () => {
  const classes = useStyles()
  const { bundles } = useSableBundleContext()

  return (
    <article className={classes.root}>
      <Typography variant="h1" component="p">
        Bundle Manager
      </Typography>
      <span>
        Bundles: { bundles.length }
      </span>
    </article>
   
  )
}

export default BundleManagerModule
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSableBundleContext } from '../../../Contexts/SableBundleContext';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
}))

const CreateBundleView = () => {
  const classes = useStyles()
  const {} = useSableBundleContext()

  return (
    <section className={classes.root}>
      <Typography variant="h1" component="p">
      CreateBundleView
      </Typography>
    </section>
   
  )
}

export default CreateBundleView
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
}))

const EntitlementCard = () => {
  const classes = useStyles()

  return (
    <article className={classes.root}>
      AppNav
    </article>
  )
}

export default EntitlementCard
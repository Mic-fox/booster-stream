import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <article className={classes.root}> 
      <Typography variant="h1" component="h1">
        Sable bundle
      </Typography>
    </article>
  )
}

export default LandingPage
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  explainer: {

  }
}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <article className={classes.root}> 
      <Typography variant="h1" component="h1">
        Sable bundle
      </Typography>
      <section className={classes.explainer}>
        {/* TODO: Create subscription card in elements */}
        {/* TODO: Create slider component */}
        {/* TODO: Dummy content Assets */}
      </section>
    </article>
  )
}

export default LandingPage
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSableBundleContext } from "../../Contexts/SableBundleContext";
import BundleWrapper from "../Content/BundleWrapper";

const useStyles = makeStyles(({  }) => ({
  root: {
  },
  explainer: {

  }
}))

const LandingPage = () => {
  const classes = useStyles()
  const { bundles } = useSableBundleContext()

  return (
    <article className={classes.root}> 
      <Typography variant="h1" component="h1">
        Sable bundle
      </Typography>
      <section className={classes.explainer}>
        {/* TODO: Create subscription card in elements */}
        <BundleWrapper bundleId="0x1" />
        {/* TODO: Create slider component */}
        {/* TODO: Dummy content Assets */}
        
      </section>
    </article>
  )
}

export default LandingPage
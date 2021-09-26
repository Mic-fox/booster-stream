import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  explainer: {

  }
}))

const LandingPage = () => {
  const classes = useStyles()
  const marks = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 3.3333,
      label: "3"
    },
    {
      value: 6.6666,
      label: "6"
    },
    {
      value: 9.9999,
      label: "$10"
    }
  ];

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <article className={classes.root}> 
      <Typography variant="h1" component="h1">
        Sable bundle
      </Typography>
    
      <section className={classes.explainer}>
        {/* TODO: Create subscription card in elements */}
        <Typography id="discrete-slider-custom" gutterBottom>
        Choose what you pay:
      </Typography>
      <Slider
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={3.3333333333}
        marks={marks}
        min={0}
        max={10}
      />
        {/* TODO: Create slider component */}
        {/* TODO: Dummy content Assets */}
      </section>
    </article>
  )
}

export default LandingPage
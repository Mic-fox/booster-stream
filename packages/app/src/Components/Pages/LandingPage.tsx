import { makeStyles, Typography, Slider, Card, CardActions, CardActionArea, CardMedia, CardContent, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  explainer: {
    maxWidth: '50%',
    backgroundColor: '#121212',
  },
  media: {
    height: 140,
  },
  mcard: {
    maxWidth: 345,
  },
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
        <Typography id="discrete-slider-custom" variant="h5" gutterBottom>
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
          <Card className={classes.mcard}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
        {/* TODO: Dummy content Assets */}
      </section>
    </article>
  )
}

export default LandingPage
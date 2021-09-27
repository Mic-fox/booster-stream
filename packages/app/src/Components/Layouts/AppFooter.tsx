import { Button, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';

import { ThemeType } from "../../theme"

interface IAppFooter {
  className?: string
}

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  techUsed: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: `${spacing(2)}px ${spacing(1)}`, 

    [breakpoints.up("sm")]: {
      "& > *": {
        maxWidth: `calc(25% - ${spacing(2)}px)`,
        width: "100%"
      }
    }
  },
  bottom: {
    
  }
}))

const AppFooter = ({ className }: IAppFooter) => {
  const classes = useStyles()
  const theme = useTheme<ThemeType>();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <footer className={clsx(classes.root, className)}>
      <section className={classes.techUsed}>
        {
          desktop ? (
            <span>
              Grid
            </span>
          ) : (
            <span>
              Carousel
            </span>
          )
        }
      </section>
      <section className={classes.bottom}>

      </section>
    </footer>
   
  )
}

export default AppFooter
import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import AppNav from './AppNav';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
  header: {
    display: "flex",
    flexDirection: "row",
    jusifyContent: "space-between",
    
  },
  nav: {
    flex: "1 1 0" // Makes that element grow to fill the space in the flex element
  }
}))

interface IAppWrapper {
    children: ReactNode
} 

const AppWrapper = ({
    children
}: IAppWrapper) => {
  const classes = useStyles()

  return (
    <article className={classes.root}>
      <header>
        {/* TODO: Add logo that routes to landing */}
        <AppNav className={classes.nav} />
      </header>
      { children }
    </article>
  )
}

export default AppWrapper
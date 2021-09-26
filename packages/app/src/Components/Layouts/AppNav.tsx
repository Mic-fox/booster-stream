import { Button, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useMoralis } from 'react-moralis';

interface IAppNav {
  className?: string
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    content: `${spacing(1)}` // This is an example
  },
}))

const AppNav = ({ className }: IAppNav) => {
  const classes = useStyles()
  const { authenticate, isAuthenticated, user  } = useMoralis();

  return (
    <section className={clsx(classes.root, className)}>
      <nav>
        AppNav
      </nav>
      <div>
        {
          !isAuthenticated ? (
            <Button variant="contained" onClick={() => authenticate()}>Connect wallet</Button>
          ) : (
            <Typography>
              {
                user.attributes?.ethAddress
              }
            </Typography>
          )
        }
      </div>
    </section>
   
  )
}

export default AppNav
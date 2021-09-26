import { createTheme } from "@material-ui/core"

let theme = createTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#9fa8da',
    },
    secondary: {
      main: '#80deea',
    },
  
  },
  typography: {
  
    allVariants: {
      // Generalised font stuff, kerning, etc
    },
    body1: {

    },
    body2: {

    },
    button: {

    },
    h1: {

    }, // and so on
  },
  overrides: {
    MuiButton: {
      contained: {
        // TODO: Set custom styling for button variants
      }
    }
  }
})

export type ThemeType = typeof theme;

export default theme
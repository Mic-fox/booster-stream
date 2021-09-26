import { createTheme } from "@material-ui/core"

let theme = createTheme({
  typography: {
    // fontFamily: // Change the font with this 
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
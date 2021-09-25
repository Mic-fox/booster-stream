import React from 'react';
import './App.css';
import { MoralisProvider } from "react-moralis";
import LoginModule from './Components/LoginModule';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <MoralisProvider appId="3FPMpQylrIzBa2LPqih5D8TMcPKBpTtWprDVOjIV" serverUrl="https://7uw8vzkvxvmw.grandmoralis.com:2053/server">
      <LoginModule/>
    </MoralisProvider>
    </ThemeProvider>
  )
}

export default App;

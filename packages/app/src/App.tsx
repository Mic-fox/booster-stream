import React from 'react';
import './App.css';
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import StreamRouter from './Components/Routes';
import { Router } from 'react-router-dom';
import history from './Helpers/History';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MoralisProvider appId="3FPMpQylrIzBa2LPqih5D8TMcPKBpTtWprDVOjIV" serverUrl="https://7uw8vzkvxvmw.grandmoralis.com:2053/server">
        <Router history={history}>
          <StreamRouter/>
        </Router>
      </MoralisProvider>
    </ThemeProvider>
  )
}

export default App;

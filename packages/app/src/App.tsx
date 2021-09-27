import React from 'react';
import './App.css';
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import history from "./Helpers/history"
import SableRouter from './Components/Routes';
import { Router } from 'react-router-dom';
import AppWrapper from './Components/Layouts/AppWrapper';
import { SableBundleProvider } from './Contexts/SableBundleContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MoralisProvider appId="3FPMpQylrIzBa2LPqih5D8TMcPKBpTtWprDVOjIV" serverUrl="https://7uw8vzkvxvmw.grandmoralis.com:2053/server">
        <SableBundleProvider>
          <Router history={history}>
            <AppWrapper>
              <SableRouter/>
            </AppWrapper>
          </Router>
        </SableBundleProvider>
      </MoralisProvider>
    </ThemeProvider>
  )
}

export default App;

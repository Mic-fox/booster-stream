import React from 'react';
import './App.css';
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import SableRouter from './Components/Routes';
import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './Components/Layouts/AppWrapper';
import { SableBundleProvider } from './Components/Contexts/SableBundleContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MoralisProvider appId="3FPMpQylrIzBa2LPqih5D8TMcPKBpTtWprDVOjIV" serverUrl="https://7uw8vzkvxvmw.grandmoralis.com:2053/server">
        <SableBundleProvider>
          <BrowserRouter>
            <AppWrapper>
              <SableRouter/>
            </AppWrapper>
          </BrowserRouter>
        </SableBundleProvider>
      </MoralisProvider>
    </ThemeProvider>
  )
}

export default App;

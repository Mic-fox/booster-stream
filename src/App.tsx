import React from 'react';
import './App.css';
import { MoralisProvider } from "react-moralis";
import LoginModule from './Components/LoginModule';


function App() {
  return (
    <MoralisProvider appId="3FPMpQylrIzBa2LPqih5D8TMcPKBpTtWprDVOjIV" serverUrl="https://7uw8vzkvxvmw.grandmoralis.com:2053/server">
      <LoginModule/>
    </MoralisProvider>
  )
}

export default App;

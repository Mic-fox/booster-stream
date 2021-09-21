import React from "react";
import { useMoralis } from "react-moralis";

const LoginModule = () => {
    const { authenticate, isAuthenticated, user,web3 } = useMoralis();

    if (!isAuthenticated)  {
      return (
        <div>
          <button onClick={() => authenticate()}>Authenticate</button>
        </div>
      );
    }
  
    return (
      <div>
        <h1>Welcome {user?.get("username")}</h1>
      </div>
    );
}

export default LoginModule
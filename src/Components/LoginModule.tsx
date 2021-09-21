import React from "react";
import { useMoralis } from "react-moralis";



const LoginModule = () => {
    const { authenticate, isAuthenticated, user  } = useMoralis();
    if (!isAuthenticated)  {
      return (
        <div>
          <button onClick={() => authenticate()}>Authenticate</button>
        </div>
      );
    }
    console.log( user?.attributes)
    if (user) {
        return (
            <div>
              <h1>Welcome {user?.get("username")}</h1>
              <span>{user?.attributes.ethAddress}</span>
                <p>
            
                </p>
            </div>
          );
    } else {
        return (
            <span>Loading</span>
        )
    }

}

export default LoginModule
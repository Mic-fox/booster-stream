import { Typography } from "@material-ui/core";
import React from "react";
import BundleManagerModule from "../Modules/BundleManagerModule";

const ManageBundlesPage = () => {
  // Below is an example of using a React helper element to make a couple elements be 1 element
  return <> 
    <Typography>
      Manage page
    </Typography>
    <BundleManagerModule />
  </>
}

export default ManageBundlesPage
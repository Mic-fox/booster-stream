import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import LandingPage from "./Pages/LandingPage";
import ManageBundlesPage from "./Pages/ManageBundlesPage";

const ROUTE_LINKS = {
  Landing: "/landing",
  ManageBundles: "/manage-bundles"
}

const SableRouter = () => {
  return <Switch>
    <Redirect
      exact
      from="/"
      to={ROUTE_LINKS.Landing}
    />
    <Route
      exact
      path={ROUTE_LINKS.Landing}
      component={LandingPage}
    />
    <Route
      exact
      path={ROUTE_LINKS.ManageBundles}
      component={ManageBundlesPage}
    />
  </Switch>
}

export default SableRouter
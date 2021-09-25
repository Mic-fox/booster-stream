import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import LandingPage from "./Pages/LandingPage";

const ROUTE_LINKS = {
    Landing: "landing"
}

const StreamRouter = () => {
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
  </Switch>
}

export default StreamRouter
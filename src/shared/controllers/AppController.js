import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Header
} from "../components/Index";

import {
  Home,
  Work
} from "../handlers/Index";

export default class AppController extends React.Component {
  render() {
    return (
      <div>

        <div
          className="wrapper"
        >

          <Header />

          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/work/:portfolioId"
              component={Work}
            />
          </Switch>

        </div>

        <footer />

      </div>
    )
  }
}

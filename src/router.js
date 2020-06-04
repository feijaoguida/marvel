import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import detail from "./pages/detail";
import home from "./pages/home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/detail" component={detail} />
      </Switch>
    </BrowserRouter>
  );
}

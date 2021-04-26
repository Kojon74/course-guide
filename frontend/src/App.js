import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import DegreeBuilder from "./degree-builder/DegreeBuilder";
import DegreeLanding from "./degree-landing/DegreeLanding";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/degree">
          <DegreeLanding />
        </Route>
        <Route path="/degree/:specialization">
          <DegreeBuilder />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

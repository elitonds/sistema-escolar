import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Classroom, Home, Users } from "./pages";
import ContainerPrincipal from "./pages/ContainerPrincipal";

function App() {
  return (
    <Router>
      <div>
        <ContainerPrincipal />
        <Switch>
          <Route path="/classroom">
            <Classroom />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

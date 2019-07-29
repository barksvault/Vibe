import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
import Landing from "../pages/Landing";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

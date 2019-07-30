import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
import Landing from "../pages/Landing";
import Search from "../pages/Search";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/search" component={Search} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

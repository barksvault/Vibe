import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import { getFromLocal } from "../services";
import LookDetail from "../pages/LookDetail";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  const [looks, setLooks] = React.useState(getFromLocal("looks") || []);

  function deleteLook(id, history) {
    const outfits = looks.filter(look => {
      return look._id !== id;
    });
    setLooks(outfits);
    history.push("/dashboard");
  }

  return (
    <Container>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route
            path="/create"
            render={props => (
              <Create looks={looks} setLooks={setLooks} {...props} />
            )}
          />
          <Route path="/search" component={Search} />

          <Route
            path="/look/:id"
            render={props => (
              <LookDetail deleteLook={deleteLook} looks={looks} {...props} />
            )}
          />

          <Route
            path="/dashboard"
            render={props => (
              <Dashboard deleteLook={deleteLook} looks={looks} {...props} />
            )}
          />

          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

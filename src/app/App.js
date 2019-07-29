import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyle /> <Dashboard />
    </>
  );
}

export default App;

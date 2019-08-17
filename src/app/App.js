import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import { getFromLocal, setToLocal } from "../services";
import LookDetail from "../pages/LookDetail";
import uuid from "uuid/v1";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  const [looks, setLooks] = React.useState(getFromLocal("looks") || []);
  const [weather, setWeather] = React.useState();

  React.useEffect(() => {
    getWeather();
  }, []);

  React.useEffect(() => {
    setToLocal("looks", looks);
  }, [looks]);

  async function getWeather() {
    const currentWeather = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?city=Hamburg&key=9d4650c365ef47b6b9cacd4eadf8c3a1"
    );
    // const jsonData = await currentWeather.json();

    setWeather({
      code: currentWeather.data.data[0].weather.code,
      temp: currentWeather.data.data[0].app_temp
    });
  }
  console.log(weather);
  function handleCreate(look, showSeasons) {
    const newLookId = { ...look, _id: uuid() };
    const newLookWeather = {
      ...look,
      _id: uuid(),
      weather: weather.code,
      temp: weather.temp
    };
    !showSeasons
      ? setLooks([newLookWeather, ...looks])
      : setLooks([newLookId, ...looks]);
  }
  function handleEdit(look) {
    const index = looks.findIndex(item => item._id === look._id);
    setLooks([...looks.slice(0, index), look, ...looks.slice(index + 1)]);
  }
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
            path="/create/:id"
            render={props => (
              <Create looks={looks} onCreate={handleEdit} {...props} />
            )}
          />
          <Route
            path="/create"
            render={props => (
              <Create looks={looks} onCreate={handleCreate} {...props} />
            )}
          />

          <Route
            path="/search"
            looks={looks}
            render={props => <Search looks={looks} {...props} />}
          />

          <Route
            path="/look/:id"
            render={props => (
              <LookDetail deleteLook={deleteLook} looks={looks} {...props} />
            )}
          />

          <Route
            path="/dashboard"
            render={props => (
              <Dashboard
                deleteLook={deleteLook}
                weather={weather}
                looks={looks}
                {...props}
              />
            )}
          />

          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

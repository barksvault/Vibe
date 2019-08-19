import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Mockdata from "../mockdata/mockdata";

import LookDetail from "../pages/LookDetail";
import uuid from "uuid/v1";
import {
  getFromLocal,
  setToLocal,
  getLooks,
  postLook,
  patchLook
} from "../services";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  const [looks, setLooks] = React.useState();
  console.log(looks);
  const [weather, setWeather] = React.useState({});
  const [seasonRange, setSeasonRange] = React.useState();

  React.useEffect(() => {
    loadLooks();
  }, []);
  async function loadLooks() {
    setLooks(await getLooks());
  }
  function updateCardInState(data) {
    const index = looks.findIndex(look => look._id === data._id);
    setLooks([...looks.slice(0, index), data, ...looks.slice(index + 1)]);
  }

  React.useEffect(() => {
    getWeather();
  }, [looks]);

  React.useEffect(() => {
    setToLocal("looks", looks);
  }, [looks]);

  async function getWeather() {
    const currentWeather = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Hamburg&units=metric&appid=9000a13cb01f156d8f261209d67d50c6"
    );

    return setWeather({
      code: currentWeather.data.weather[0].id,
      temp: currentWeather.data.main.temp
    });
  }
  React.useEffect(() => {
    if (weather.temp >= 8 && weather.temp <= 16) {
      setSeasonRange("Spring");
    } else if (weather.temp >= 16 && weather.temp <= 50) {
      setSeasonRange("Sommer");
    } else if (weather.temp >= 5 && weather.temp <= 18) {
      setSeasonRange("Fall");
    } else if (weather.temp <= 7) {
      setSeasonRange("Winter");
    }
  }, []);

  console.log(weather);
  function handleCreate(look) {
    console.log("jkdhsadkhasdkhasldh");

    console.log(look);

    postLook(look).then(result => setLooks([result, ...looks]));
  }
  function handleEdit(look) {
    patchLook(look, look._id).then(result => updateCardInState(result));
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
              <Create
                looks={looks}
                weather={weather}
                onCreate={handleCreate}
                {...props}
              />
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
                seasonRange={seasonRange}
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

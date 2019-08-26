import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import GlobalStyle from "./GlobalStyles";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import LookDetail from "../pages/LookDetail";
import {
  setToLocal,
  getLooks,
  postLook,
  patchLook,
  deleteLooks
} from "../services";
import Login from "../pages/Login";
import UserData from "../mockdata/user";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  const [looks, setLooks] = useState();
  const [weather, setWeather] = useState(null);
  const [activeUser, setActiveUser] = useState(UserData);

  React.useEffect(() => {
    loadLooks();
  }, []);

  async function loadLooks() {
    setLooks(await getLooks());
  }

  function updateLookInState(data) {
    const index = looks.findIndex(look => look._id === data._id);
    setLooks([...looks.slice(0, index), data, ...looks.slice(index + 1)]);
  }

  React.useEffect(() => {
    getWeather();
  }, []);

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

  function handleCreate(look, showSeasons) {
    if (!showSeasons && weather) {
      look = {
        ...look,
        temp: weather.temp || "",
        weatherCondition: weather.code || ""
      };
    }

    postLook(look).then(result => setLooks([result, ...looks]));
  }

  function handleEdit(look) {
    patchLook(look, look._id).then(result => updateLookInState(result));
  }

  function deleteLook(id, history) {
    deleteLooks(id).then(result => {
      const index = looks.findIndex(look => look._id === id);
      setLooks([...looks.slice(0, index), ...looks.slice(index + 1)]);
    });

    history.push("/dashboard");
  }

  function handleLogin(formValues) {
    const profile = formValues.user_name;
    const index = UserData.findIndex(user => user.user_name === profile);
    setActiveUser(UserData[index]);
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
            path="/login"
            render={props => (
              <Login activeUser={activeUser} onLogin={handleLogin} {...props} />
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
          />{" "}
          <Route
            path="/:tag"
            render={props => <Search looks={looks} {...props} />}
          />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

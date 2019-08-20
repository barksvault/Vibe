import React from "react";
import styled from "styled-components";
import Look from "../components/Look";
import Navbar from "../components/Navbar";
import DashboardHeaderContent from "../components/DashboardHeaderContent";

// import { getFromLocal, setToLocal } from "../services";
import uuid from "uuid/v1";
import { fadeIn } from "../utils/animations";

const StyledNavbar = styled(Navbar)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CardContainerTitle = styled.h2`
  animation: ${fadeIn} 1.5s ease 1 both;
  color: #673a94;
  margin-left: 36px;
`;

const CardContainer = styled.div`
  animation: ${fadeIn} 1.5s ease 1 both;
  display: grid;
  padding-bottom: 77px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

function getSeasonRange(weather) {
  if (weather.temp >= 8 && weather.temp <= 16) {
    return "Spring";
  } else if (weather.temp >= 16 && weather.temp <= 50) {
    return "Sommer";
  } else if (weather.temp >= 5 && weather.temp <= 18) {
    return "Fall";
  } else if (weather.temp <= 7) {
    return "Winter";
  }
}

function Dashboard({ looks, history, weather, ...props }) {
  const [selectedLook, setSelectedLook] = React.useState(null);
  const seasonRange = weather && getSeasonRange(weather);

  function renderLook(look) {
    return (
      <Look
        key={look._id}
        id={look._id}
        img={look.img}
        title={look.title}
        onClick={() => handleLookSelect(look)}
      />
    );
  }

  function handleLookSelect(look) {
    setSelectedLook({ _id: uuid(), ...selectedLook });
    history.push(`look/${look._id}`);
  }

  return (
    <>
      <DashboardHeaderContent
        looks={looks}
        weather={weather}
        seasonRange={seasonRange}
        {...props}
      />
      <CardContainerTitle>Your closet</CardContainerTitle>
      <CardContainer>
        {looks && looks.map(look => renderLook(look))}
      </CardContainer>

      <StyledNavbar />
    </>
  );
}

export default Dashboard;

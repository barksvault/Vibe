import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import BackgroundVibe from "../Images/BackgroundVibe.png";

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  overflow-y: auto;
`;

function Dashboard() {
  return (
    <>
      <Background src={BackgroundVibe} />
      <h1>VIBE</h1>
      <CardContainer>
        <Card />
        <Navbar />
      </CardContainer>
    </>
  );
}
export default Dashboard;

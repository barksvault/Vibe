import React from "react";
import styled from "styled-components";
import Look from "../components/Look";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";
import FullCardView from "../components/FullCardView";
// import { getFromLocal, setToLocal } from "../services";
import uuid from "uuid/v1";

const StyledNavbar = styled(Navbar)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const CardContainerTitle = styled.h2`
  color: #673a94;
  margin-left: 21px;
`;
const CardContainer = styled.div`
  display: grid;
  padding-bottom: 77px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

function Dashboard({ looks, history, _id }) {
  const [selectedLook, setSelectedLook] = React.useState(null);

  function renderLook(look) {
    return (
      <Look
        id={look._id}
        img={look.img}
        title={look.title}
        onClick={() => handleLookSelect(look)}
      />
    );
  }

  function handleLookSelect(look, _id) {
    console.log("passed it", look);
    setSelectedLook({ _id: uuid(), ...look });
    history.push(`look/${look._id}`);
  }

  if (selectedLook) {
    return <FullCardView />;
  }

  return (
    <>
      <DashboardContent />
      <CardContainerTitle>Your closet</CardContainerTitle>
      <CardContainer>{looks.map(look => renderLook(look))}</CardContainer>

      <StyledNavbar />
    </>
  );
}

export default Dashboard;

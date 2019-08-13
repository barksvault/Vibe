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
  animation: ${fadeIn} 3s ease 1 both;
  color: #673a94;
  margin-left: 21px;
`;
const CardContainer = styled.div`
  animation: ${fadeIn} 3s ease 1 both;
  display: grid;
  padding-bottom: 77px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

function Dashboard({ looks, history }) {
  const [selectedLook, setSelectedLook] = React.useState(null);

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

  function handleLookSelect(look, _id) {
    setSelectedLook({ _id: uuid(), ...look });
    history.push(`look/${look._id}`);
  }

  return (
    <>
      <DashboardHeaderContent looks={looks} />
      <CardContainerTitle>Your closet</CardContainerTitle>
      <CardContainer>
        {looks.map(look => look.img && renderLook(look))}
      </CardContainer>

      <StyledNavbar />
    </>
  );
}

export default Dashboard;

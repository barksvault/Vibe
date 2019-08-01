import React from "react";
import styled from "styled-components";
import Look from "../components/Look";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";
// import { getFromLocal, setToLocal } from "../services";

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

function Dashboard({ looks }) {
  // const [looks, setLooks] = React.useState(getFromLocal("looks") || []);

  // const newLooks = looks.slice();
  // newLooks = { ...looks };
  // setLooks(newLooks);

  function renderLook(look) {
    return <Look img={look.img} title={look.title} />;
  }

  return (
    <>
      <DashboardContent />
      <CardContainerTitle>Your closet</CardContainerTitle>
      <CardContainer>{looks.map(look => renderLook(look))} </CardContainer>

      <StyledNavbar />
    </>
  );
}
export default Dashboard;

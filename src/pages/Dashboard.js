import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";

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

function Dashboard() {
  return (
    <>
      <DashboardContent />
      <CardContainerTitle>Your closet</CardContainerTitle>
      <CardContainer>
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card />
      </CardContainer>

      <StyledNavbar />
    </>
  );
}
export default Dashboard;

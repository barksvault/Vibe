import React from "react";
import styled from "styled-components";
import { fadeIn } from "../utils/animations";
import BackgroundVibe from "../Images/BackgroundVibe.png";
import Look from "./Look";

import { Link } from "react-router-dom";

const DashboardHeader = styled.header`
  animation: ${fadeIn} 3s ease 1 both;
  background-image: url(${BackgroundVibe});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  position: relative;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  height: 300px;
  text-align: center;
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const DashboardTitle = styled.h1`
  text-decoration: none;
  color: white;
  font-size: 30px;
  grid-area: 1 / 2 / 2 / 7;
`;

const TodaysOutfitTitle = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-area: 2 / 1 / 4 / 5;
`;
const TodaysSubTitle = styled.div`
  font-size: 25px;
  grid-area: 1 / 1 / 2 / 3;
`;
const OutfitSubTitle = styled.div`
  font-size: 25px;
  grid-area: 2 / 2 / 3 / 4;
`;
const TodaysCard = styled.div`
  grid-area: 3 / 6 / 8 / 7;
`;
const Tags = styled.div`
  color: white;
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr;
  grid-area: 6 / 2 / 8 / 5;
`;

const TagContainer1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;
const TagContainer2 = styled.div`
  grid-area: 2 / 2 / 3 / 4;
`;
const Tag = styled.span`
  border: solid white 1px;
  padding: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function DashboardHeaderContent({ looks }) {
  function renderLook(look) {
    return <Look id={look._id} img={look.img} title={look.title} />;
  }

  const todaysLook = looks && looks[0];

  return (
    <DashboardHeader>
      <DashboardTitle>
        <StyledLink to="/">VIBE</StyledLink>{" "}
      </DashboardTitle>
      <TodaysOutfitTitle>
        <TodaysSubTitle>Today's</TodaysSubTitle>
        <OutfitSubTitle>Outfit</OutfitSubTitle>
      </TodaysOutfitTitle>
      <TodaysCard>{todaysLook && renderLook(todaysLook)}</TodaysCard>
      <Tags>
        <TagContainer1>
          {todaysLook && <Tag>#{todaysLook.tags} </Tag>}
        </TagContainer1>
        <TagContainer2 />
      </Tags>
    </DashboardHeader>
  );
}

export default DashboardHeaderContent;
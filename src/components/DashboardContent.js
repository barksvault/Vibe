import React from "react";
import styled from "styled-components";
import Card from "./Look";
import BackgroundVibe from "../Images/BackgroundVibe.png";

const DashboardHeader = styled.header`
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
  color: white;
  font-size: 30px;
  grid-area: 1 / 2 / 2 / 7;
`;

const TodaysOutfitTitle = styled.div`
  font-size: 20px;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-area: 2 / 1 / 4 / 5;
`;
const TodaysSubTitle = styled.div`
  font-size: 20px;
  grid-area: 1 / 1 / 2 / 3;
`;
const OutfitSubTitle = styled.div`
  font-size: 20px;
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

function DashboardContent() {
  return (
    <DashboardHeader>
      <DashboardTitle>VIBE </DashboardTitle>
      <TodaysOutfitTitle>
        <TodaysSubTitle>Today's</TodaysSubTitle>
        <OutfitSubTitle>Outfit</OutfitSubTitle>
      </TodaysOutfitTitle>
      <TodaysCard>
        <Card />
      </TodaysCard>
      <Tags>
        <TagContainer1>
          <Tag>#Elegant</Tag>
        </TagContainer1>
        <TagContainer2>
          <Tag>#Classy</Tag>
        </TagContainer2>
      </Tags>
    </DashboardHeader>
  );
}

export default DashboardContent;

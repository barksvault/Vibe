import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { fadeIn } from "../utils/animations";
import BackgroundVibe from "../Images/BackgroundVibe.png";
import Look from "./Look";
import { Link } from "react-router-dom";
import RecommendationSlider from "./RecommendationSlider";

const DashboardHeader = styled.header`
  animation: ${fadeIn} 1.5s ease 1 both;
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
  position: absolute;
  width: 135px;
  right: 22px;
  top: 82px;
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
  margin-bottom: 10px;
`;
const TagContainer2 = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  margin-top: 10px;
`;
const Tag = styled.span`
  border: solid white 1px;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 5px;
  transition: all 0.4s;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function DashboardHeaderContent({
  onTodaysLookClick,
  seasonRange,
  looks,
  weather
}) {
  const [indexCount, setIndexCount] = useState(0);
  function renderLook(look) {
    return (
      <Look
        key={look.title}
        id={look._id}
        img={look.img}
        title={look.title}
        onClick={() => onTodaysLookClick(look)}
      />
    );
  }

  const todaysLooks =
    looks &&
    weather &&
    looks.filter(
      look =>
        look.season === seasonRange ||
        (weather && Math.abs(weather.temp - look.temp) <= 3)
    );

  console.log(todaysLooks);
  const tags = todaysLooks && todaysLooks.map(look => look.tags);

  let showTags = tags && tags[indexCount];

  console.log(tags);
  const tag1 = showTags && showTags[0];

  const tag2 = showTags && showTags[1];

  useInterval(() => {
    setIndexCount(indexCount + 1);
  }, 4500);
  if (tags && indexCount === tags.length) {
    setIndexCount(0);
  }
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  console.log(indexCount);
  return (
    <DashboardHeader>
      <DashboardTitle>
        <StyledLink to="/">VIBE</StyledLink>{" "}
      </DashboardTitle>
      <TodaysOutfitTitle>
        <TodaysSubTitle>Today's</TodaysSubTitle>
        <OutfitSubTitle>Outfit</OutfitSubTitle>
      </TodaysOutfitTitle>{" "}
      <TodaysCard>
        <RecommendationSlider>
          {looks && looks.map(look => renderLook(look))}
        </RecommendationSlider>
      </TodaysCard>
      <Tags>
        <TagContainer1>
          {" "}
          <Tag>#{tag1}</Tag>
        </TagContainer1>

        <TagContainer2>
          <Tag>#{tag2}</Tag>
        </TagContainer2>
      </Tags>
    </DashboardHeader>
  );
}

export default DashboardHeaderContent;

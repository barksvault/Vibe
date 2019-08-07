import React from "react";
import Background from "../components/Background";
import Fullscreen from "../components/Fullscreen";
import Headline from "../components/Headline";
import MainLogo from "../components/MainLogo";
import Sublogo from "../components/SubLogo";
import LandingImg from "../Images/LandingImg.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkd = styled(Link)`
  z-index: 3;
  display: block;
  text-decoration: none;
  margin: -80px;
`;

function Landing() {
  return (
    <>
      <Fullscreen>
        <MainLogo />
        <StyledLinkd to="/dashboard">
          <Headline size="L">V I B E</Headline>
        </StyledLinkd>
        <Sublogo />

        <Background src={LandingImg} />
      </Fullscreen>
    </>
  );
}
export default Landing;

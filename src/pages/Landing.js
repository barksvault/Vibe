import React from "react";
import Background from "../components/Background";
import Fullscreen from "../components/Fullscreen";
import Headline from "../components/Headline";
import LandingImg from "../Images/LandingImg.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import { fadeDown, fadeIn } from "../utils/animations";

const StyledLink = styled(Link)`
  z-index: 3;
  display: block;
  text-decoration: none;
  margin: -80px;
`;

const LogoNorth = styled(Logo)`
  top: 20;
  height: 200px;
  animation: ${fadeIn} 3s ease 1 both;
`;
const LogoSouth = styled(Logo)`
  height: 200px;
  animation: ${fadeDown} 3s ease 1 both;
`;
function Landing() {
  return (
    <>
      <Fullscreen>
        <LogoNorth />
        <StyledLink data-cy="nav-login" to="/login">
          <Headline size="L">V I B E</Headline>
        </StyledLink>

        <Background src={LandingImg} />
        <LogoSouth />
      </Fullscreen>
    </>
  );
}

export default Landing;

import React from "react";
import Background from "../components/Background";
import Fullscreen from "../components/Fullscreen";
import Headline from "../components/Headline";
import MainLogo from "../components/MainLogo";
import Sublogo from "../components/SubLogo";
import LandingImg from "../Images/LandingImg.png";

function Landing() {
  return (
    <>
      <Fullscreen>
        <MainLogo />
        <Headline size="L">V I B E</Headline>
        <Background src={LandingImg} /> <Sublogo />
      </Fullscreen>
    </>
  );
}
export default Landing;

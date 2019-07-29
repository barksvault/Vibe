import React from "react";
import Background from "../components/Background";
import Fullscreen from "../components/Fullscreen";
import Headline from "../components/Headline";
import MainLogo from "../components/MainLogo";
import Sublogo from "../components/SubLogo";

function Landing() {
  return (
    <>
      <Fullscreen>
        <MainLogo />
        <Headline size="L">V I B E</Headline>
        <Background src="https://9to5mac.com/wp-content/uploads/sites/6/2018/07/Abstract-4.jpg" />{" "}
        <Sublogo />
      </Fullscreen>
    </>
  );
}
export default Landing;

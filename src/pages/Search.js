import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Fullscreen from "../components/Fullscreen";
import Background from "../components/Background";
import Detail from "../Images/DetailBackground.png";

function Search() {
  return (
    <>
      <Fullscreen>
        <Background src={Detail} />
        <h1>Search</h1>
      </Fullscreen>

      <Navbar />
    </>
  );
}

export default Search;

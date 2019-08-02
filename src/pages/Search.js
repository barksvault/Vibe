import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Fullscreen from "../components/Fullscreen";
import Background from "../components/Background";

const Container = styled.div`
  padding: 10px;
`;

function Search() {
  return (
    <>
      <Fullscreen>
        <Background />
      </Fullscreen>
      <h1>Search</h1>
      <Container />
      <Navbar />
    </>
  );
}

export default Search;

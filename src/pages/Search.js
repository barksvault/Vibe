import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  padding: 10px;
`;

function Search() {
  return (
    <>
      <h1>Search</h1>
      <Container />
      <Navbar />
    </>
  );
}

export default Search;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchButton from "../Images/SearchButton.png";
import VibeButton from "../Images/VibeButton.png";
import CreateButton from "../Images/CreateButton.png";

const NavbarContainer = styled.footer`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

function Navbar() {
  function handleSearch() {
    console.log("Search");
  }
  function handleVibe() {
    console.log("Vibe");
  }
  function handleCreate() {
    console.log("Create");
  }
  return (
    <NavbarContainer>
      <img src={SearchButton} onClick={handleSearch} />
      <img src={VibeButton} onClick={handleVibe} />
      <img src={CreateButton} onClick={handleCreate} />
    </NavbarContainer>
  );
}
Navbar.PropTypes = {
  onClick: PropTypes.func
};
export default Navbar;

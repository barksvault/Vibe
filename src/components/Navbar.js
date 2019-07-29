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
      <img src={SearchButton} alt="Search" onClick={handleSearch} />
      <img src={VibeButton} alt="Vibe" onClick={handleVibe} />
      <img src={CreateButton} alt="Create" onClick={handleCreate} />
    </NavbarContainer>
  );
}
Navbar.propTypes = {
  onClick: PropTypes.func
};
export default Navbar;

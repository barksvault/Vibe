import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchButton from "../Images/SearchButton.png";
import VibeButton from "../Images/VibeButton.png";
import CreateButton from "../Images/CreateButton.png";

const NavbarContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

function Navbar({ className }) {
  function handleSearch() {
    console.log("Search");
  }

  function handleVibe() {
    console.log("Vibe");
  }

  return (
    <NavbarContainer className={className}>
      <Link to="/search">
        <img src={SearchButton} alt="Search" />
      </Link>

      <Link to="/dashboard">
        <img src={VibeButton} alt="Vibe" />
      </Link>
      <Link to="/create">
        <img src={CreateButton} alt="Create" />
      </Link>
    </NavbarContainer>
  );
}
Navbar.propTypes = {
  onClick: PropTypes.func
};
export default Navbar;

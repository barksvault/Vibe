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
  left: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const NavbarElement = styled.img`
  transition: all 0.4s;
  &:active {
    background: violet;
    border-radius: 50%;
  }
`;
function Navbar({ className }) {
  return (
    <NavbarContainer className={className}>
      <Link to="/search">
        <NavbarElement src={SearchButton} alt="Search" />
      </Link>

      <Link to="/dashboard">
        <NavbarElement src={VibeButton} alt="Vibe" />
      </Link>
      <Link to="/create">
        <NavbarElement src={CreateButton} alt="Create" />
      </Link>
    </NavbarContainer>
  );
}
Navbar.propTypes = {
  onClick: PropTypes.func
};
export default Navbar;

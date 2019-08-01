import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { fadeVibe } from "../utils/animations";

const sizes = {
  S: "18px",
  M: "20px",
  L: "24px"
};

function getSize(size) {
  return sizes[size] || sizes.M;
}

const StyledHeadline = styled.h1`
  margin: -80px;
  font-size: ${props => getSize(props.size)};
  color: white;
  font-family: "Montserrat", sans-serif;
  animation: ${fadeVibe} 3s ease 1 both;
`;

function Headline({ size, ...props }) {
  return <StyledHeadline size={size} {...props} />;
}

Headline.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"])
};

Headline.defaultProps = {
  size: "M"
};

export default Headline;

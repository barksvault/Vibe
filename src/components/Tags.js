import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
const StyledTag = styled.span`
  color: white;
  border: solid white 1px;
  padding: 4px;
`;

function Tag({ tag, ...props }) {
  return <StyledTag {...props}>{tag}</StyledTag>;
}
Tag.propTypes = {
  tag: PropTypes.string
};
export default Tag;

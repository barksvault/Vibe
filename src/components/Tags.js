import styled from "styled-components";
import React from "react";

const StyledTag = styled.span`
  color: white;
  border: solid white 1px;
  padding: 4px;
`;

function Tag({ tag, ...props }) {
  return <StyledTag {...props}>{tag}</StyledTag>;
}
export default Tag;

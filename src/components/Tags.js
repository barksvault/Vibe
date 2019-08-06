import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const Tag = styled.span`
  border: solid white 1px;
  padding: 4px;
`;

function Tags({ img, tag, ...props }) {
  return <Tag>{tag}</Tag>;
}
export default Tags;

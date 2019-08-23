import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
`;

function LoadingAnimation() {
  return <StyledLoader />;
}
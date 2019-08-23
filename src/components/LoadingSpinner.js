import React from "react";
import styled from "styled-components";
import { loading } from "../utils/animations";

const StyledLoader = styled.div`
  border: 8px solid white;
  border-top: 8px solid #663992;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${loading} 2s linear infinite;
  position: relative;
  top: 60px;
  left: 30px;
`;

function LoadingSpinner() {
  return <StyledLoader />;
}

export default LoadingSpinner;

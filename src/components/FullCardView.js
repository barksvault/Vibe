import React from "react";
import styled from "styled-components";

const StyledInfoCard = styled.div`
  height: 200px;
  width: 100px;
  color: blue;
`;

function FullCardView() {
  return (
    <StyledInfoCard>
      <div>Hallo Info</div>
    </StyledInfoCard>
  );
}

export default FullCardView;

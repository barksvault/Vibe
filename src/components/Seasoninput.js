import React from "react";
import styled from "styled-components";
import { fadeVibe } from "../utils/animations";

const StyledButton = styled.button`
  text-align: center;
  width: 75px;
  padding: 10px;
  color: white;
  background: #663992;
  border-radius: 14px;
  font-size: 15px;
  :focus {
    outline: none;
    color: #663992;
    border-color: #663992;
    background-color: white;
  }
`;
const ButtonContainer = styled.div`
  padding: 5px;
  border-radius: 14px;
  border: solid 2px #663992;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  animation: ${fadeVibe} 0.5s ease 1 both;
`;
function SeasonInput({ onhandleSelectedSeason }) {
  return (
    <ButtonContainer>
      <StyledButton
        value="Spring"
        name="season"
        onClick={onhandleSelectedSeason}
      >
        Spring{" "}
      </StyledButton>

      <StyledButton
        name="season"
        value="Sommer"
        onClick={onhandleSelectedSeason}
      >
        {" "}
        Sommer
      </StyledButton>

      <StyledButton name="season" value="Fall" onClick={onhandleSelectedSeason}>
        {" "}
        Fall
      </StyledButton>

      <StyledButton
        name="season"
        value="Winter"
        onClick={onhandleSelectedSeason}
      >
        {" "}
        Winter
      </StyledButton>
    </ButtonContainer>
  );
}
export default SeasonInput;

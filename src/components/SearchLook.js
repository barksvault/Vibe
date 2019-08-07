import styled from "styled-components";
import React from "react";

const StyledLook = styled.div`
  width: 306px;
  height: 348px;
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LookImg = styled.img`
  position: relative;
  top: 0;
  object-fit: cover;
  border-radius: 15px;

  height: 75%;
  width: 100%;
`;

export const LookTitle = styled.div`
  text-align: center;
  border-top: 1px solid white;
  padding: 2px 5px;
  font-size: 14px;
  color: white;
  background-color: rgba(216, 216, 216, 0.141882);
`;
function SearchLook({ img, title, onClick, titleColor, ...props }) {
  return (
    <StyledLook {...props}>
      <LookImg onClick={onClick} src={img} />
      <LookTitle>{title}</LookTitle>
    </StyledLook>
  );
}
export default SearchLook;

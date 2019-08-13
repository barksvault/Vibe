import styled from "styled-components";
import React from "react";

const StyledLook = styled.div`
  width: 306px;
  min-height: 348px;
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ImgFrame = styled.div`
  width: 306px;
  height: 308px;
`;
const LookImg = styled.img`
  border-radius: 15px;
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const LookTitle = styled.div`
  text-align: center;
  border-top: 1px solid white;
  padding: 2px 5px;
  font-size: 20px;
  color: white;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgba(216, 216, 216, 0.141882);
`;
function SearchLook({ img, title, onClick, titleColor, ...props }) {
  return (
    <StyledLook {...props}>
      <ImgFrame>
        <LookImg onClick={onClick} src={img} />
      </ImgFrame>
      <LookTitle>{title}</LookTitle>
    </StyledLook>
  );
}
export default SearchLook;

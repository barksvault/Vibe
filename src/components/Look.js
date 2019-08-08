import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledLook = styled.div`
  width: 120px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 0px 25px -6px rgba(115, 113, 115, 1);
  margin-bottom: 15px;

  :hover {
    transform: scale(2);
  }
`;

const LookImg = styled.img`
  object-fit: fill;
  border-radius: 15px;
  height: 130px;
  width: 120px;
`;

export const LookTitle = styled.div`
  text-align: center;
  border-top: 1px solid #663992;
  padding: 2px 5px;
  font-size: 14px;
  color: ${props => props.titleColor || "#663992"};
  background-color: white;
`;

function Look({ img, title, onClick, titleColor, ...props }) {
  return (
    <StyledLook {...props}>
      <LookImg onClick={onClick} src={img} />
      <LookTitle>{title}</LookTitle>
    </StyledLook>
  );
}

Look.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Look;

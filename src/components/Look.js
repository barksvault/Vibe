import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledLook = styled.div`
  background: white;
  width: 135px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 0px 25px -6px rgba(115, 113, 115, 1);
  margin-bottom: 15px;
`;

const LookImg = styled.img`
  object-fit: cover;
  object-position: 0 0;
  height: 140px;
  border-radius: 15px;
  width: 135px;
`;

export const LookTitle = styled.div`
  text-align: center;
  padding: 2px 5px;
  font-size: 14px;
  color: #663992;
  background-color: white;
`;

function Look({ img, title, onClick, ...props }) {
  return (
    <StyledLook {...props}>
      <LookImg onClick={onClick} src={img} />
      <LookTitle>{title}</LookTitle>
    </StyledLook>
  );
}
Look.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  weather: PropTypes.array
};
export default Look;

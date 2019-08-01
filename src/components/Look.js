import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledLook = styled.div`
  width: 120px;
  border: 1px solid #979797;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const LookImg = styled.img`
  border-radius: 15px;

  height: 130px;
  width: 120px;
`;

const LookTitle = styled.div`
  text-align: center;
  border-top: 1px solid #979797;
  padding: 2px 5px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 13);
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
  title: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Look;

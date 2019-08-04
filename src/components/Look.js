import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledLook = styled.div`
  width: 120px;
  border: 1px solid #663992;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LookImg = styled.img`
  border-radius: 15px;

  height: 130px;
  width: 120px;
`;

const LookTitle = styled.div`
  text-align: center;
  border-top: 1px solid #663992;
  padding: 2px 5px;
  font-size: 14px;
  background-color: rgba(216, 216, 216, 0.141882);
`;

function Look({ img, _id, title, onClick, ...props }) {
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

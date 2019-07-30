import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const Card = styled.div`
  width: 120px;
  border: 1px solid #979797;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const CardImg = styled.img`
  border-radius: 15px;
  background: red;
  height: 130px;
  width: 120px;
`;
const CardTitle = styled.div`
  text-align: center;
  border-top: 1px solid #979797;
  padding: 2px 5px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 13);
`;
function Cards({ img, title, ...props }) {
  return (
    <Card {...props}>
      <CardImg src={img} />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.img
};
export default Cards;

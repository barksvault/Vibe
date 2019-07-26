import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const Card = styled.div`
  width: 100px;
  height: 200px;
`;
const CardImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background: #d8d8d8;
  border: 1px solid #979797;
`;
const CardTitle = styled.div`
  width: 100px;
  height: 60px;
  background: #d8d8d8;
  border: 1px solid #979797;
  border-radius: 15px;
`;
function Cards() {
  return (
    <Card>
      <CardImg />
      <CardTitle />
    </Card>
  );
  Card.PropTypes = {
    img: PropTypes.img.isRequired,
    title: PropTypes.string.isRequired
  };
}
export default Cards;

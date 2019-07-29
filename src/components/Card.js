import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const Card = styled.div`
  width: 120px;
  border: 1px solid #979797;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;
const CardImg = styled.div`
  background: red;
  height: 100px;
  width: 120px;
`;
const CardTitle = styled.div`
  text-align: center;
  border-top: 1px solid #979797;
  padding: 2px 5px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 13);
`;
function Cards() {
  return (
    <Card>
      <CardImg />
      <CardTitle>Red Party Look</CardTitle>
    </Card>
  );
}
Card.propTypes = {
  img: PropTypes.img.isRequired,
  title: PropTypes.string.isRequired
};
export default Cards;

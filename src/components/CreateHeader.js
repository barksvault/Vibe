import React from "react";
import styled from "styled-components";
import CreateImgTop from "../Images/CreateImgTop.png";

const Image = styled.img``;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function CreateHeaderTop() {
  return (
    <Container>
      <Image src={CreateImgTop} />
    </Container>
  );
}
export default CreateHeaderTop;

import React from "react";
import styled from "styled-components";
import CreateImgTop from "../Images/CreateImgTop.png";
import { fadeIn } from "../utils/animations";

const Image = styled.img``;

const Container = styled.div`
  animation: ${fadeIn} 1.5s ease 1 both;
  display: flex;
  justify-content: center;
`;

function CreateHeaderTop({ looks }) {
  return (
    <Container>
      <Image src={CreateImgTop} />
    </Container>
  );
}
export default CreateHeaderTop;

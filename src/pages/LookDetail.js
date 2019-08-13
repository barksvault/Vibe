import React from "react";
import styled from "styled-components";
import Detail from "../Images/LandingImg.png";
import { fadeDown } from "../utils/animations";

import Popup from "reactjs-popup";

function LookDetail({ history, looks, match, deleteLook }) {
  const outfit = looks && looks.find(look => look._id === match.params.id);
  console.log(outfit);
  if (!outfit) {
    return null; // Look not found
  }
  const BackButton = styled.div`
    font-size: 30px;
    position: absolute;
    top: 19px;
    left: 12px;
  `;
  const DetailImg = styled.img`
    border: white 2px solid;
    border-radius: 20px;
    object-fit: fill;
    height: 384px;
    width: 100%;
  `;
  const StyledHeader = styled.h1`
    text-align: center;
    padding-top: 10px;
    margin-top: 0;
    color: white;
  `;
  const ColorDot = styled.span`
    height: 25px;
    width: 25px;
    background-color: ${outfit.color};
    border-radius: 50%;
    display: inline-block;
  `;

  const Container = styled.div`
    animation: ${fadeDown} 1s ease 1 both;
    color: white;
    object-fit: cover;
    background-repeat: no-repeat;
    background-image: url(${Detail});
    height: 100vh;
    overflow: auto;
  `;
  const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
  `;

  const StyledPara = styled.p`
    background-color: rgba(216, 216, 216, 0.2);
    padding: 10px;
    margin: 0;
  `;
  const OptionButton = styled.button`
    z-index: 100;
    background: white;
    content: "\2807";
    font-size: 100px;

    font-size: 20px;
    color: white;
    font: white;
    content: "f39b";
  `;
  const DeleteButton = styled.button`
    padding: 10px;
    height: 25px;
    width: 25px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 19px;
    right: 12px;
  `;
  const OptionContainer = styled.div`
    height: 100px;
    width: 50px;
  `;

  const ContainerDetail = styled.div`
    height: 100vh;
    overflow: auto;
    background: rgba(8, 8, 9, 0.36);
  `;
  function handleBackClick() {
    history.push(`/dashboard`);
  }

  return (
    <>
      <Container>
        <DeleteButton onClick={() => deleteLook(outfit._id, history)}>
          {" "}
        </DeleteButton>
        <Popup
          trigger={<OptionButton className="button" />}
          position="left top"
          on="hover"
        >
          <OptionContainer title="Left Top" />
        </Popup>
        <BackButton className="fas fa-chevron-left" onClick={handleBackClick} />

        <StyledHeader> {outfit.title} </StyledHeader>
        <DetailImg src={outfit.img} alt={outfit.title} />

        <ContainerContent>
          <h2>Description</h2>
          <StyledPara>{outfit.description}</StyledPara>
          <h2>Favorite Piece</h2>
          <StyledPara>{outfit.favorite}</StyledPara>
          <h2>Season</h2>
          <StyledPara>{outfit.season}</StyledPara>
          <h2>Tags</h2>
          <StyledPara>{outfit.tags}</StyledPara>
          {outfit.color && <h2>Color</h2>}
          <ColorDot>{outfit.color}</ColorDot>
        </ContainerContent>
      </Container>
    </>
  );
}

export default LookDetail;

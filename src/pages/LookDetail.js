import React, { useEffect } from "react";
import styled from "styled-components";
import Detail from "../Images/BackgroundVibe.png";
import { fadeVibe } from "../utils/animations";

function LookDetail({ history, looks, match, deleteLook }) {
  const outfit = looks && looks.find(look => look._id === match.params.id);

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
    animation: ${fadeVibe} 3s ease 1 both;
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
    animation: ${fadeVibe} 3s ease 1 both;
    color: white;
    background: url(${Detail});
    object-fit: cover;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: auto;
  `;
  const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
  `;
  const StyledPara = styled.p`
    background-color: rgba(216, 216, 216, 0.141882);
    padding: 10px;
    margin: 0;
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
  function handleBackClick() {
    history.push(`/dashboard`);
  }

  return (
    <>
      <Container>
        <DeleteButton onClick={() => deleteLook(outfit._id, history)}>
          {" "}
        </DeleteButton>
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
          <h2>Color</h2>
          <ColorDot>{outfit.color}</ColorDot>
        </ContainerContent>
      </Container>
    </>
  );
}

export default LookDetail;

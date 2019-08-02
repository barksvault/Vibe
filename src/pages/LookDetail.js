import React from "react";
import styled from "styled-components";
import Detail from "../Images/DetailBackground.png";
import { fadeVibe } from "../utils/animations";

function LookDetail({ history, looks, match }) {
  const outfit = looks && looks.find(look => look._id === match.params.id);
  console.log(outfit.description);
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
    object-fit: contain;
    height: 384px;
    width: 100vw;
    animation: ${fadeVibe} 3s ease 1 both;
  `;
  const StyledHeader = styled.h1`
    text-align: center;
    padding-top: 10px;
    margin-top: 0;
    color: white;
  `;
  const Container = styled.div`
    animation: ${fadeVibe} 3s ease 1 both;
    color: white;
    background: url(${Detail});
    height: 100vh;
    overflow: auto;
  `;

  function handleBackClick() {
    history.push(`/dashboard`);
  }
  return (
    <>
      <Container>
        <BackButton className="fas fa-chevron-left" onClick={handleBackClick} />
        <StyledHeader> {outfit.title} </StyledHeader>
        <DetailImg src={outfit.img} alt={outfit.title} />
        <div>
          <h2>Description</h2>
          <p>{outfit.description}</p>
          <h2>Favorite Piece</h2>
          <p>{outfit.favorite}</p>
          <h2>Season</h2>
          <p>{outfit.season}</p>
          <h2>color</h2>
          <p>{outfit.color}</p>
        </div>
      </Container>
    </>
  );
}

export default LookDetail;

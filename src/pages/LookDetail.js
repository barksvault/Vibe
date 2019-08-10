import React from "react";
import styled from "styled-components";
import Detail from "../Images/BackgroundVibe.png";
import { fadeVibe } from "../utils/animations";

function LookDetail({ history, looks, match, deleteLook }) {
  const outfit = looks && looks.find(look => look._id === match.params.id);
  const [color, setColor] = React.useState({});
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
    background-color: ${color};
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

  function handleBackClick() {
    history.push(`/dashboard`);
  }
  var sightengine = require("sightengine")("958064678", "XcpJCy4xCUG26Fvp9nZC");

  sightengine
    .check(["properties"])
    .set_url(outfit.img)
    .then(function(result) {
      setColor(result.colors.accent[0].hex);
    })
    .catch(function(err) {
      // handle the error
    });

  return (
    <>
      <Container>
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
          <StyledPara>{outfit.tags.split("#")}</StyledPara>
          <h2>Color</h2>
          <ColorDot />
          <button onClick={() => deleteLook(outfit._id, history)}>
            {" "}
            "delete look"
          </button>
        </ContainerContent>
      </Container>
    </>
  );
}

export default LookDetail;

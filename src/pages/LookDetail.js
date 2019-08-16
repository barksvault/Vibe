import React from "react";
import styled from "styled-components";
import Detail from "../Images/LandingImg.png";
import { fadeDown } from "../utils/animations";

import Popup from "reactjs-popup";

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
const PopupContainer = styled.div`
  position: relative;
`;
const OptionButton = styled.button`
  background: white;
  height: 15px;
  width: 20px;
  background: white;
  position: absolute;
  top: 10px;
  right: 20px;
  font: yellow;
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
  height: 50px;
  width: 100px;
`;

const EditButton = styled.button`
  height: 25px;
  width: 25px;
  background: violet;
  border-radius: 50%;
`;
const ColorDot = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
`;
function LookDetail({ onChange, looks, history, match, deleteLook }) {
  const outfit = looks && looks.find(look => look._id === match.params.id);

  if (!outfit) {
    return null;
  }

  function handleBackClick() {
    history.push(`/dashboard`);
  }
  function handleEdit() {
    history.push(`/create/${outfit._id}`);
  }

  return (
    <>
      <Container>
        <BackButton className="fas fa-chevron-left" onClick={handleBackClick} />

        <StyledHeader> {outfit.title} </StyledHeader>
        <PopupContainer>
          <DetailImg src={outfit.img} alt={outfit.title} />
          <Popup
            trigger={<OptionButton className="button" />}
            position="left top"
            on="click"
          >
            <OptionContainer title="Left Top">
              <DeleteButton onClick={() => deleteLook(outfit._id, history)} />
              <EditButton onClick={() => handleEdit(outfit)} />
            </OptionContainer>
          </Popup>
        </PopupContainer>
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
          <ColorDot />
        </ContainerContent>
      </Container>
    </>
  );
}

export default LookDetail;

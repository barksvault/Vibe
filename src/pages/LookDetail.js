import React from "react";
import styled from "styled-components";
import Detail from "../Images/BackgroundVibe.png";
import { fadeDown } from "../utils/animations";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
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
  background-image: url(${Detail});
  background-repeat: no-repeat;
  height: 100%;

  overflow: auto;
`;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StyledInfo = styled.p`
  background-color: rgba(216, 216, 216, 0.2);
  padding: 10px;
  margin: 0;
`;
const PopupContainer = styled.div`
  position: relative;
`;

const OptionButton = styled.img`
  width: 30px;
  height: 15px;
  border-radius: 14px;
  background: #663992;
  border: 10px double white;
  box-shadow: 0px 13px 56px 34px rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 10px;
  right: 20px;
  &:active {
    background-color: grey;
  }
`;
const OptionContainer = styled.div`
  height: 65px;
  width: 100px;
  display: flex;
  flex-direction: column;
`;

const EditButton = styled.button`
  font-size: 12px;
  color: #663992;
  height: 25px;
  width: auto;
  border-radius: 15px;
  background: white;
  margin-bottom: 10px;
  border: solid 2px #663992;
`;
const DeleteButton = styled.button`
  font-size: 12px;
  color: #663992;
  height: 25px;
  width: auto;
  border-radius: 15px;
  background: white;
  border: solid 2px #663992;
`;
const TagList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`;
const StyledTag = styled.span`
  border-radius: 3px;
  margin-right: 5px;
  color: white;
  border: solid white 1px;
  padding: 4px;
`;
const ColorDot = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
`;
function LookDetail({ looks, history, match, deleteLook }) {
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

  function renderTag(tag) {
    return (
      <StyledTag key={tag} onClick={() => handleVibeClick(tag)}>
        #{tag}
      </StyledTag>
    );
  }
  function handleVibeClick(tag) {
    console.log(tag);

    history.push(`/search/${tag}`);
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
              <EditButton onClick={() => handleEdit(outfit)}>
                Edit look
              </EditButton>
              <DeleteButton onClick={() => deleteLook(outfit._id, history)}>
                Delete look
              </DeleteButton>
            </OptionContainer>
          </Popup>
        </PopupContainer>
        <ContainerContent>
          <h2>Description</h2>

          <StyledInfo>{outfit.description}</StyledInfo>

          <h2>Favorite Piece</h2>
          <StyledInfo>{outfit.favorites}</StyledInfo>
          {outfit.season && <h2>Season</h2>}
          {outfit.season && <StyledInfo>{outfit.season}</StyledInfo>}
          <h2>Vibes</h2>
          <TagList>{outfit.tags.map(tag => renderTag(tag))}</TagList>
          {outfit.color && <h2>Color</h2>}
          <ColorDot style={{ background: outfit.color }} />
        </ContainerContent>
      </Container>
    </>
  );
}
LookDetail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  looks: PropTypes.array,
  deleteLook: PropTypes.func
};
export default LookDetail;

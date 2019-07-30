import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CreateHeader from "../components/CreateHeader";
import ImgButton from "../Images/ImgButton.png";
import SubmitButton from "../Images/SubmitButton.png";

const Container = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: grid;

  padding: 10px;
  padding-bottom: 7px;
`;
const TitleInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 30px;
  border: 3px solid #663992;
  font-size: 15px;
`;
const DescriptionInput = styled.input`
  ::placeholder {
    color: #663992;
  }

  padding: 10px;
  border-radius: 14px;
  margin-bottom: 30px;
  font-size: 15px;
  border: 3px solid #663992;
`;
const SeasonInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 14px;

  font-size: 15px;
  border: 3px solid #663992;
`;
const TagInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 14px;

  font-size: 15px;
  border: 3px solid #663992;
`;
const FavoritePieceInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 3px solid #663992;
`;

const AddImgButton = styled.img``;
const SubButton = styled.img`
  padding-bottom: 40px;
`;
function CreateCard() {
  return (
    <>
      <CreateHeader />

      <Container>
        {" "}
        <AddImgButton src={ImgButton} />
      </Container>
      <StyledForm>
        <TitleInput placeholder="Look title" />
        <DescriptionInput placeholder="Description" />
        <TagInput placeholder="Tags" />
        <SeasonInput placeholder="Season" />
        <FavoritePieceInput placeholder="Favorite piece" />
      </StyledForm>
      <Container>
        <SubButton src={SubmitButton} />
      </Container>
      <Navbar />
    </>
  );
}

export default CreateCard;

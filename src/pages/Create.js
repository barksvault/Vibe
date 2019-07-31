import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CreateHeader from "../components/CreateHeader";
import ImgButton from "../Images/ImgButton.png";
import SubmitButton from "../Images/SubmitButton.png";
import { CirclePicker } from "react-color";
import { setToLocal } from "../services";

const Container = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
function CreateCard({ looks, setLooks, ...props }) {
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
    img: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function handleSubmit() {
    // First save data
    setToLocal("looks", [...looks, formValues]);
    setLooks([...looks, formValues]);
    props.history.push("/dashboard");
    // then redirect to...
  }

  return (
    <>
      <CreateHeader />

      <Container>
        {" "}
        <AddImgButton src={ImgButton} />
      </Container>
      <StyledForm onSubmit={handleSubmit}>
        <TitleInput
          placeholder="Look title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
        <DescriptionInput
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />
        <TagInput placeholder="Tags" />
        <SeasonInput placeholder="Season" />
        <FavoritePieceInput placeholder="Favorite piece" />
      </StyledForm>

      <Container>
        <CirclePicker />
        <SubButton src={SubmitButton} onClick={handleSubmit} />
      </Container>
      <Navbar />
    </>
  );
}

export default CreateCard;

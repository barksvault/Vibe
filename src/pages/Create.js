import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CreateHeader from "../components/CreateHeader";
import ImgButton from "../Images/ImgButton.png";
import SubmitButton from "../Images/SubmitButton.png";
import { CirclePicker } from "react-color";
import { setToLocal } from "../services";
import axios from "axios";
import uuid from "uuid/v1";
import { fadeVibe } from "../utils/animations";

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
  display: flex;
  align-items: center;
  flex-direction: column;
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

const AddImgButton = styled.img`
  animation: ${fadeVibe} 2s ease 1 both;
`;

const SubButton = styled.img`
  padding-bottom: 40px;
`;
const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgUpload = styled.div`
  display: none;
`;
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

function CreateCard({ looks, setLooks, ...props }) {
  // const [image, setImage] = React.useState("");

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(res => {
        // setImage(res.data.secure_url);
        setFormValues({ ...formValues, img: res.data.secure_url });
      })
      .catch(err => console.error(err));
  }

  // function onImageSave(response) {
  //   console.log(response);
  //   setImage(response.data.url);
  //   console.log(response.data.url);
  // }

  const [formValues, setFormValues] = React.useState({
    _id: uuid(),
    img: "",
    title: "",
    color: "",
    description: "",
    season: "",
    tags: "",
    favorites: ""
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
    // console.log(formValues);

    setToLocal("looks", [formValues, ...looks]);
    setLooks([formValues, ...looks]);
    props.history.push("/dashboard");
    // then redirect to...
  }
  const handleColorChange = ({ hex }) =>
    setFormValues({ ...formValues, color: hex });

  return (
    <>
      <CreateHeader />

      <Container>
        {" "}
        <StyledImgContainer>
          <label for="file-input">
            <AddImgButton src={ImgButton} />
          </label>
          <ImgUpload>
            <input id="file-input" type="file" name="img" onChange={upload} />
          </ImgUpload>

          {formValues.img && (
            <img
              src={formValues.img}
              alt=""
              style={{ width: "50%", borderRadius: "50%" }}
            />
          )}
        </StyledImgContainer>
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
        <TagInput placeholder="Tags" name="tags" />
        <SeasonInput
          placeholder="Season"
          name="season"
          onChange={handleChange}
        />
        <FavoritePieceInput
          placeholder="Favorite piece"
          name="favorite"
          onChange={handleChange}
        />
        <CirclePicker name="color" onChangeComplete={handleColorChange} />
      </StyledForm>

      <Container>
        <SubButton src={SubmitButton} onClick={handleSubmit} />
      </Container>
      <Navbar />
    </>
  );
}

export default CreateCard;

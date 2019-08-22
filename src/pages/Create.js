import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CreateHeader from "../components/CreateHeader";
import ImgButton from "../Images/ImgButton.png";
import SubmitButton from "../Images/SubmitButton.png";
import axios from "axios";
import PropTypes from "prop-types";
import { fadeDown } from "../utils/animations";
import SeasonInput from "../components/Seasoninput";
import Switch from "react-switch";
const Container = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled.form`
  animation: ${fadeDown} 1s ease 1 both;
  padding: 10px;
  padding-bottom: 7px;
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 15px;
  border: 3px solid #663992;
  font-size: 15px;
`;
const DescriptionInput = styled.textarea`
  ::placeholder {
    color: #663992;
  }

  padding: 10px;
  border-radius: 14px;
  margin-bottom: 15px;
  font-size: 15px;
  border: 3px solid #663992;
`;

const TagInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 14px;
  font-size: 15px;
  border: 3px solid #663992;
`;
const FavoritePieceInput = styled.input`
  ::placeholder {
    color: #663992;
  }
  outline: none;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 14px;
  font-size: 15px;
  border: 3px solid #663992;
`;

const AddImgButton = styled.img`
  animation: ${fadeDown} 1s ease 1 both;
`;

const SubButton = styled.img`
  padding-bottom: 59px;
`;
const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgUpload = styled.div`
  display: none;
`;

const StyledError = styled.div`
  color: #663992;
`;
const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  font: 20px;
  padding: 12px;
  color: #663992;
  margin-right: 8px;
`;
const StyledLabelTitel = styled.div`
  margin-right: 10px;
`;
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

function CreateCard({ looks, weather, match, onCreate, ...props }) {
  const outfiToEdit =
    match.params.id &&
    looks &&
    looks.find(look => look._id === match.params.id);
  const [showSeasons, setShowSeasons] = React.useState(false);
  const [formValues, setFormValues] = React.useState(
    outfiToEdit
      ? { ...outfiToEdit }
      : {
          img: "",
          title: "",
          description: "",
          season: "",
          tags: "",
          favorites: "",
          color: ""
        }
  );

  const [errors, setErrors] = React.useState({});
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
        setFormValues({ ...formValues, img: res.data.secure_url });
      })
      .catch(err => console.error(err));
  }

  function validate() {
    const errors = {};

    if (formValues.img.trim() === "") {
      errors.img = "Add an Image ";
    }

    if (formValues.title.trim() === "") {
      errors.title = "Please add a picture";
    }
    if (formValues.description.trim() === "") {
      errors.description = "Please add a description";
    }
    if (formValues.tags === "") {
      errors.tags = "Please add a tags";
    }

    if (formValues.favorites.trim() === "") {
      errors.favorites = "Please add a favorites";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  /* useEffect(() => {
    if (!formValues.img) {
      return;
    }

    const sightengine = require("sightengine")(
      "958064678",
      "XcpJCy4xCUG26Fvp9nZC"
    );

    sightengine
      .check(["properties"])
      .set_url(formValues.img)
      .then(function(result) {
        setFormValues({ ...formValues, color: result.colors.accent[0].hex });
      })
      .catch(function(err) {});
  }, [formValues.img]);
*/
  function handleSubmit() {
    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    onCreate(formValues, showSeasons);
    props.history.push("/dashboard");
  }

  function handleTags(e) {
    const tagValue = e.target.value;
    const tags = tagValue.split(",").map(tag => tag.trim());
    setFormValues({ ...formValues, tags: tags });
  }

  function handleSeasonClick(e) {
    setShowSeasons(!showSeasons);
  }
  function handleSelectedSeason(e) {
    const selectedSeason = e.target.value;

    setFormValues({ ...formValues, season: selectedSeason });
  }
  return (
    <>
      <CreateHeader />
      <Container>
        {" "}
        <StyledImgContainer>
          <label htmlFor="file-input">
            <AddImgButton src={ImgButton} />
          </label>
          <ImgUpload>
            <input id="file-input" type="file" name="img" onChange={upload} />
          </ImgUpload>

          {formValues.img && (
            <img
              src={formValues.img}
              alt=""
              style={{ width: "50%", borderRadius: "50px" }}
            />
          )}
        </StyledImgContainer>
      </Container>
      <StyledForm onSubmit={handleSubmit}>
        {errors.title && <StyledError>{errors.title}</StyledError>}
        <TitleInput
          placeholder="Look Title"
          name="title"
          onChange={handleChange}
          error={errors.title}
          defaultValue={outfiToEdit && outfiToEdit.title}
        />
        {errors.description && <StyledError>{errors.description}</StyledError>}
        <DescriptionInput
          defaultValue={formValues.description}
          placeholder="Description"
          name="description"
          onChange={handleChange}
          error={errors.description}
        />{" "}
        {errors.tags && <StyledError>{errors.tags}</StyledError>}
        <TagInput
          defaultValue={outfiToEdit && outfiToEdit.tags}
          placeholder="Vibes"
          name="tags"
          onChange={handleTags}
          error={errors.tags}
        />
        {errors.favorites && <StyledError>{errors.favorites}</StyledError>}
        <FavoritePieceInput
          defaultValue={outfiToEdit && outfiToEdit.favorites}
          placeholder="Favorite Piece"
          name="favorites"
          onChange={handleChange}
          error={errors.favorites}
        />
      </StyledForm>{" "}
      {errors.season && <StyledError>{errors.season}</StyledError>}
      <StyledLabel>
        <StyledLabelTitel>For another Season? </StyledLabelTitel>
        <Switch
          aria-labelledby="neat-label"
          onColor="#663992"
          height={20}
          width={40}
          uncheckedIcon={false}
          checkedIcon={false}
          name="showSeason"
          checked={showSeasons}
          onChange={handleSeasonClick}
        />
      </StyledLabel>
      {showSeasons && (
        <SeasonInput
          onhandleSelectedSeason={handleSelectedSeason}
          error={errors.season}
        />
      )}
      <Container>
        <SubButton src={SubmitButton} onClick={handleSubmit} />
      </Container>
      <Navbar />
    </>
  );
}
CreateCard.propTypes = {
  looks: PropTypes.array.isRequired,
  history: PropTypes.func,
  weather: PropTypes.object
};
export default CreateCard;

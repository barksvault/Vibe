import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Fullscreen from "../components/Fullscreen";
import Background from "../components/Background";
import SearchImg from "../Images/LandingImg.png";
import Headline from "../components/Headline";
import Fuse from "fuse.js";

import { fadeDown, fadeRight, fadeVibe } from "../utils/animations";
import SearchLook from "../components/SearchLook";

const StyledFullscreen = styled(Fullscreen)`
  justify-content: flex-start;
  overflow: auto;
`;

const StyledBackground = styled(Background)`
  animation: ${fadeRight} 2s ease 1 both;
`;
const StylesSearchlook = styled(SearchLook)`
  animation: ${fadeDown} 2s ease 1 both;
  margin-bottom: 30px;
`;
const MoodContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  height: auto;
  width: 100vw;
  padding-bottom: 50px;
`;
const SearchInput = styled.input`
  ::placeholder {
    color: white;
  }
  outline: none;
  animation: ${fadeVibe} 3s ease 1 both;
  background: rgba(216, 216, 216, 0.282206);
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 30px;
  border: 3px solid white;
  font-size: 15px;
  color: white;
`;

function Search({ handleLookSelect, history, looks, ...props }) {
  const randomPlaceholder = looks[Math.floor(Math.random() * looks.length)];

  const [searchValue, setSearchValue] = React.useState("");
  const [result, setResult] = React.useState([]);

  function handleChange(event) {
    const lowerCaseValue = event.target.value.toLowerCase();
    setSearchValue(lowerCaseValue);
  }

  React.useEffect(() => {
    if (!searchValue) {
      return;
    }

    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "description", "tags", "season"]
    };
    const fuse = new Fuse(looks, options); // "list" is the item array
    const result = fuse.search(
      searchValue ? searchValue : "hcfizewakdfzwekfewkadzrkwezdfkwe"
    );
    setResult(result);
  }, [searchValue]);

  function renderOutfit(outfit) {
    return (
      <StylesSearchlook
        titleColor="white"
        key={outfit._id}
        id={outfit._id}
        img={outfit.img}
        title={outfit.title}
        onClick={() => handleOutfit(outfit)}
      />
    );
  }
  function handleOutfit(outfit, _id) {
    history.push(`look/${outfit._id}`);
  }

  return (
    <>
      <StyledFullscreen>
        <StyledBackground src={SearchImg} />

        <Headline size="XL">What is your vibe?</Headline>
        <SearchInput
          placeholder={randomPlaceholder.tags}
          type="search"
          onChange={handleChange}
        />
        <MoodContainer>
          {result.map(outfit => renderOutfit(outfit))}
        </MoodContainer>
      </StyledFullscreen>

      <Navbar />
    </>
  );
}

export default Search;

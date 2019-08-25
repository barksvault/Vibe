import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Fullscreen from "../components/Fullscreen";
import Background from "../components/Background";
import SearchImg from "../Images/LandingImg.png";
import Headline from "../components/Headline";
import Fuse from "fuse.js";
import PropTypes from "prop-types";
import { fadeDown, fadeRight, fadeVibe } from "../utils/animations";
import SearchResults from "../components/SearchResults";

const StyledFullscreen = styled(Fullscreen)`
  justify-content: flex-start;
  overflow: auto;
`;

const StyledBackground = styled(Background)`
  animation: ${fadeRight} 1s ease 1 both;
`;
const StylesSearchResults = styled(SearchResults)`
  animation: ${fadeDown} 2s ease 1 both;
  margin-bottom: 30px;
`;
const ResultContainer = styled.div`
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
    opacity: 0.5;
  }
  outline: none;
  animation: ${fadeVibe} 1.5s ease 1 both;
  background: rgba(216, 216, 216, 0.282206);
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 30px;
  border: 3px solid white;
  font-size: 15px;
  color: white;
`;

function Search({ history, looks, match }) {
  const [searchValue, setSearchValue] = React.useState(
    (match.params && match.params.tag) || ""
  );

  const [result, setResult] = React.useState([]);

  function handleChange(event) {
    const lowerCaseValue = event.target.value.toLowerCase();
    setSearchValue(lowerCaseValue);
  }

  React.useEffect(() => {
    if (!searchValue || !looks) {
      return;
    }

    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "description", "tags", "season", "favorites"]
    };
    const fuse = new Fuse(looks, options);
    const result = fuse.search(searchValue);
    setResult(result);
  }, [searchValue, looks]);

  function renderOutfit(outfit) {
    return (
      <StylesSearchResults
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
          value={searchValue}
          placeholder="#vibes"
          type="search"
          onInput={handleChange}
        />
        <ResultContainer>
          {result.map(outfit => renderOutfit(outfit))}
        </ResultContainer>
      </StyledFullscreen>
      <Navbar />
    </>
  );
}
Search.propTypes = {
  looks: PropTypes.array.isRequired,
  history: PropTypes.func,
  match: PropTypes.object
};
export default Search;

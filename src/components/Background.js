import styled from "styled-components";

const Background = styled.img`
  position: absolute;
  top: 0;
  object-fit: cover;
  z-index: -1;
  height: 100vh;
  width: 100%;
  filter: saturate(1);
  align-items: center;
  justify-content: center;
`;
export default Background;

import styled from "styled-components";

const Background = styled.img`
  position: absolute;
  top: 0;
  object-fit: cover;
  z-index: -1;
  height: 100%;
  width: 100%;
  filter: grayscale(0.3) saturate(5);
`;
export default Background;

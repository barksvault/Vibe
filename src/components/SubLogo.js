import styled from "styled-components";
import { fadeDown } from "../utils/animations";
import Logo from "./Logo";

const Sublogo = styled(Logo)`
  height: 200px;
  animation: ${fadeDown} 3s ease 1 both;
`;

export default Sublogo;

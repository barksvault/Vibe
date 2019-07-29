import styled from "styled-components";
import { fadeIn } from "../utils/animations";
import Logo from "./Logo";

const MainLogo = styled(Logo)`
  height: 200px;
  animation: ${fadeIn} 3s ease 1 both;
`;

export default MainLogo;

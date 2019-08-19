import { createGlobalStyle } from "styled-components";
import { slideRight } from "../utils/animations";

export default createGlobalStyle`
* {
    box-sizing:border-box;
}

html,body {
    margin:0;
}
body {
    font-family: 'Montserrat', sans-serif;
}
input, textarea, button, img, a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
.popup-content {
   
    width:auto !important;
   border: solid 2px #663992 !important;
    border-radius:14px !important;
     animation: ${slideRight} 0.8s ease 1 both !important;
}
`;

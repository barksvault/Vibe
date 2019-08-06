import { createGlobalStyle } from "styled-components";

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

.popup-content {
   
    width:auto !important;
   border: solid 2px #663992 !important;
    border-radius:14px !important;
}
`;

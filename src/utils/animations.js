import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0)
  }

  
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeVibe = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeRight = keyframes`
  
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }


`;
export const move = keyframes`
  from{
    opacity: 0;
    transform: translate3d(-20px, -30px, -100px); 
  }
  30% {
    opacity: 1;
  }
  to{
    transform: translate3d(0, 0, 0);
  }
`;

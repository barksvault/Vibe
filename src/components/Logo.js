import React from "react";

function Logo(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05zm0 17.9c118.9 0 215.1 96.15 215.1 215.05S374.9 471.1 256 471.1c-118.9 0-215.05-96.2-215.05-215.1C40.95 137.1 137.1 40.95 256 40.95z"
        fill="#fff"
        fillOpacity="1"
      />
    </svg>
  );
}
export default Logo;

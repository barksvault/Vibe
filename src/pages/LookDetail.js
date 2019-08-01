import React from "react";

function LookDetail({ looks, match }) {
  const outfit = looks && looks.find(look => look._id === match.params.id);

  if (!outfit) {
    return null; // Look not found
  }

  return (
    <>
      {" "}
      <h1>Look Detail: {outfit.title} </h1>
      <img src={outfit.img} alt={outfit.title} />;
    </>
  );
}

export default LookDetail;

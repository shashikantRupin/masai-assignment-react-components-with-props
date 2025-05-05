import React from "react";

const Avatar = ({ imageUrl, altText }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{ width: "100px", borderRadius: "50%" }}
    />
  );
};

export default Avatar;

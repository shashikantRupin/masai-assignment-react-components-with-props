import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const UserProfile = ({ name ,email,bio,imageUrl}) => {
  const userProfileData = {
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Frontend developer with a passion for clean design and performant code.",
  };
  return (
    <>
      <h2>2:Composition of Components</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <Avatar
          imageUrl={imageUrl}
          altText={`${name}'s profile`}
        />
        <UserInfo
          name={name}
          email={email}
          bio={bio}
        />
      </div>
    </>
  );
};

export default UserProfile;

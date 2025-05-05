import React from "react";

const UserInfo = ({ name, email, bio }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Bio:</strong> {bio}
      </p>
    </div>
  );
};

export default UserInfo;

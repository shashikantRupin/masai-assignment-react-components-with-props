import React, { useState } from "react";
import UserProfile from "../componentComposition/UserProfile";

const UserDashboard = ({
  name,
  age,
  email,
  imageUrl,
  isLoggedIn: initialLoginState,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);

  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <>
      <h1>4: Combining Props, Composition, and Conditional Rendering</h1>
      <div
        style={{
          padding: "1rem",
          border: "1px solid #aaa",
          borderRadius: "8px",
          maxWidth: "400px",
          margin:'auto',
        }}
      >
        {isLoggedIn ? (
          <>
            <UserProfile
              name={name}
              email={email}
              bio={`Age: ${age}`}
              imageUrl={imageUrl}
            />
            <button onClick={handleToggle} style={{ marginTop: "1rem" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h3>You need to log in.</h3>
            <button onClick={handleToggle}>Login</button>
          </>
        )}
      </div>
    </>
  );
};

export default UserDashboard;

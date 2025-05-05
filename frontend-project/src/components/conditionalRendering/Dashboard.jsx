import React from "react";
import LoginMessage from "./LoginMessage";

const Dashboard = ({ isLoggedIn }) => {
  return (
    <>
        <h2>3:Conditional rendering</h2>
      <div
        style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <LoginMessage isLoggedIn={isLoggedIn} />
        {isLoggedIn && <div> user is LoggedIn</div>}
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";

const LoginMessage = ({ isLoggedIn }) => {
  return <h2>{isLoggedIn ? "Welcome back, User!" : "Please log in."}</h2>;
};

export default LoginMessage;

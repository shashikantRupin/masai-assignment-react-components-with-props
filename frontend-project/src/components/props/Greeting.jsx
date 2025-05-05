import React from "react";

const Greeting = ({ name, timeOfDay }) => {
  return (
    <p>
      Good {timeOfDay}, {name}!
    </p>
  );
};

export default Greeting;

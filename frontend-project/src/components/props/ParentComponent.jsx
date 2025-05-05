import React from 'react'
import Greeting from './Greeting';

const ParentComponent = () => {
  return (
    <div>
      <h2>1:Props in Action</h2>
      <Greeting name={"Raaz"} timeOfDay={"morning"} />
      <Greeting name="Ranbir" timeOfDay="afternoon" />
      <Greeting name={"Rahul"} timeOfDay={"evening"} />
    </div>
  );
}

export default ParentComponent
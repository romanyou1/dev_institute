import React, { useState } from "react";
import Garage from "./Garage";

function Car(props) {

  const [color] = useState("red");

  return (
    <div>
      <h1>This car is {color} {props.carInfo.model}</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;
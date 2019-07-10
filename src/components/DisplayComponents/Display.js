import React from "react";

const Display = () => {
  return <div>
  {props.firstNumber} {props.mathOperator} {props.secondNumber}

  Result: {props.finalResult}
  </div>;
};

export default Display
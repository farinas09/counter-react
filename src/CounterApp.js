import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  //handleAdd
  const handleAdd = (e, action) => {
    switch (action) {
      case "add":
        setCounter(counter + 1);
        break;
      case "reset":
        setCounter(0);
        break;
      case "substract":
        setCounter(counter - 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1> CounterApp </h1>
      <p> {counter} </p>

      <button onClick={(e) => handleAdd(e, "add")}>+1</button>
      <button onClick={(e) => handleAdd(e, "reset")}>Reset</button>
      <button onClick={(e) => handleAdd(e, "substract")}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;

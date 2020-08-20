import React from "react";
import PropTypes from "prop-types";
//import React, { Fragment } from 'react';

const FirstApp = ({ saludo, subtitle }) => {
  return (
    <>
      <h1> {saludo} </h1>
      <p> {subtitle} </p>
    </>
  );
};

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "My fisrt app subtitle",
};

export default FirstApp;

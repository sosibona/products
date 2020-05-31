import React from "react";
import PropTypes from "prop-types";
import "./error.scss";

const ErrorField = ({ children }) => {
  return <div className="error">{children}</div>;
};

ErrorField.propTypes = {
  children: PropTypes.string,
};

export default ErrorField;

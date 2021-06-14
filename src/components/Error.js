import React from "react";
import { Alert } from "antd";
import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
  return (
    <>
      <div className="alert-error"></div>
      <Alert message={mensaje} type="error" showIcon />
      <div className="alert-error"></div>
    </>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;

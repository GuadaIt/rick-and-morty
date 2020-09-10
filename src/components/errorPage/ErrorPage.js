import React from 'react';
import PropTypes from 'prop-types';
import './ErrorPage.css';

const ErrorPage = ({ err }) => {

  if (err.networkError) {
    return (
      <div className="err">
        <h1>Server error.</h1>
      </div>  
    )
  } else {
    return (
      <div className="err">
        <h1>Not found.</h1>
      </div>  
    )
  };  
};

ErrorPage.propTypes = {
  err: PropTypes.object.isRequired
};

export default ErrorPage;
import React from 'react';
import "./spinner.css";

function WithLoading(Component) {

  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    );
  };
}
export default WithLoading;
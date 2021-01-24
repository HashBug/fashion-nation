import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  const withSpinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return withSpinner;
};

export default WithSpinner;

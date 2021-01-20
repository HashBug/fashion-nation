import "./custom-button.styles.scss";

const CustomButton = ({ isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {otherProps.children}
  </button>
);

export default CustomButton;

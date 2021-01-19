import "./custom-button.styles.scss";

const CustomButton = ({ isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {otherProps.children}
  </button>
);

export default CustomButton;

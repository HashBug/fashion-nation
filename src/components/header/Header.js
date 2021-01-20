import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link to="/sign-in" className="option">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

const mapsStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapsStateToProps)(Header);

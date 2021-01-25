import { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./sign-in.styles.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignIn } = this.props;
    emailSignIn(email, password);
  };

  render() {
    const { googleSignIn } = this.props;
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Log In</CustomButton>
            <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
        <span>
          Don't have an account? <Link to="/sign-up">SignUp</Link>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

import { Component } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./sign-in.styles.scss";
import { SignInWithGoogle } from "../../utils/firebase/firebase.utils";
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
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
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
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

export default SignIn;

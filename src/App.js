import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkAuthenticatedUser } from "./redux/user/user.actions";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/shop";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Checkout from "./pages/checkout/Checkout";

import Header from "./components/header/Header";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkAuthenticatedUser } = this.props;
    checkAuthenticatedUser();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/sign-up"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuthenticatedUser: () => dispatch(checkAuthenticatedUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

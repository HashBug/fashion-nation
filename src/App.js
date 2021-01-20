import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.utils";
import "./App.css";

const Hats = () => <h1>Hats</h1>;

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //onAuthStateChanged observing for any changes in auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // get or create user
        const userRef = await createUserProfileDocument(userAuth);
        //listen to changes in snapshot
        userRef.onSnapshot((snapShot) => {
          //set current user
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
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
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/hats" component={Hats} />
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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

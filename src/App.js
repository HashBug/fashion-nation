import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.utils";

const Hats = () => <h1>Hats</h1>;

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //onAuthStateChanged observing for any changes in auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // get or create user
        const userRef = await createUserProfileDocument(userAuth);
        //listen to changes in snapshot
        userRef.onSnapshot((snapShot) => {
          //set current user
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth }, () =>
        console.log("called ", this.state)
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/hats" component={Hats} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

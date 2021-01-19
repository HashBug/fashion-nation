import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";
import SignIn from "./pages/sign-in/SignIn";
import { auth } from "./utils/firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
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
        </Switch>
      </div>
    );
  }
}

export default App;

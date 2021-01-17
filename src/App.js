import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";

const Hats = () => <h1>Hats</h1>;

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Productlist from "./pages/products";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Productlist} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

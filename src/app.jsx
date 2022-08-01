import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import ProductList from "./components/product-list";
import Details from "./components/details";
import Cart from "./components/cart";
import Default from "./components/default";
import Modal from "./components/modal";
import "./base.scss";



class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    );
  }
}

export default App;

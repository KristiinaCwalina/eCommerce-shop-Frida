import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import CarouselAndSideMenu from "./Components/CarouselAndSideMenu";
import Featured from "./Components/Featured";
import SaleItems from "./Components/SaleItems";
import AllProducts from "./Components/AllProducts";
import Cart from "./Pages/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <div>
                    <Nav />
                  </div>
                  <div>
                    <CarouselAndSideMenu />
                  </div>
                  <div>
                    <Featured />
                  </div>
                  <div>
                    <SaleItems />
                  </div>
                  <div>
                    <AllProducts />
                  </div>
                  <div>
                    <Footer />
                  </div>
                </div>
              );
            }}
          />
          <Route
            path="/products/:id"
            component={Products}
            exact
            render={() => {
              return (
                <div>
                  <div>
                    <Products />
                  </div>
                </div>
              );
            }}
          />
          <Route path="cart/:id?" component={Cart}  exact render ={() => {
            return (
              <div>
              <div><Cart/></div>
              </div>
            );}}
              />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

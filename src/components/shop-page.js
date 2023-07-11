import "./shop-page.css";
import cart from "./images/cart.png";
import Products from "./items";
import React, { useState } from "react";

const ShopPage = () => {
  const [cartSize, setCartSize] = useState(0);
  return (
    <div>
      <div id="top">
        <div className="App-header">Morshou's Shop</div>
        <div className="cart">
          <img className="icon" src={cart} alt="Cart"></img>
          <div id="numItems">{cartSize}</div>
        </div>
      </div>
      <Products setCartSize={setCartSize} cartSize={cartSize} />
    </div>
  );
};

export default ShopPage;

import "./App.css";
import React, { useState, useEffect } from "react";
import morshou from "./components/images/morshu.png";

function App() {
  const changePage = () => {
    window.location = "/shopping-cart/shop-page"
  };

  return (
    <div className="App">
      <header className="App-header">Morshou's Shop</header>
      <div className="aboutUs">
        <p>About us</p>
        <p>
          - Lamp oil. Rope? Bombs? You want it? It's yours my friend. As long as
          you have enough rubies.
        </p>
      </div>
      <img src={morshou} alt="Morshou" />
      <button onClick={changePage}>Start Shopping</button>
    </div>
  );
}

export default App;

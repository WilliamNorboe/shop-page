import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from "./components/shop-page.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop-page" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

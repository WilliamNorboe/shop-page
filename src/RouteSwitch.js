import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from "./components/shop-page.js";
import { HashRouter, Routes, Route} from 'react-router-dom'
// import {
//   createHashRouter,
//   RouterProvider
// } from 'react-router-dom';

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/shop-page",
//     element: <ShopPage />,
//   }
// ]);

const RouteSwitch = () => {
  console.log("loaded");
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shop-page" element={<ShopPage />} />
      </Routes>
    </HashRouter>
    // <RouterProvider router={router} />
  );
};

export default RouteSwitch;

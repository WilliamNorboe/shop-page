import Item from "./item.js";

import lampOil from "./images/lampoil.webp";
import rope from "./images/rope.webp";
import bomb from "./images/bomb.png";

import React, { useState } from "react";

import uniqid from "uniqid";

const item = (img, name, cost) => {
  return { img, name, cost };
};

const addToCart = (val, cartSize, setCartSize) => {
  console.log(val);
  if (val > 99 || val < 0) {
    return;
  }
  let cpy = cartSize;
  cpy += Number(val);
  setCartSize(cpy);
};

const Products = (props) => {
  let titems = [];
  titems.push(item(bomb, "Bomb", 20));
  titems.push(item(lampOil, "Lamp Oil", 10));
  titems.push(item(rope, "Rope", 5));

  let [items, setItems] = useState(titems);
  let cards = [];
  for (let i = 0; i < items.length; ++i) {
    // console.log(items[i])
    cards.push(
      <Item
        img={items[i].img}
        cost={items[i].cost}
        name={items[i].name}
        btn={addToCart}
        key={uniqid()}
        cartSize={props.cartSize}
        setCartSize={props.setCartSize}
      />,
    );
  }
  return <div className="items">{cards}</div>;
};

export default Products;

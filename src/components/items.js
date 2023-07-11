import cart from "./images/cart.png";
import Item from "./item.js";

import lampOil from "./images/lampoil.webp";
import React, { useState } from 'react';

import uniqid from "uniqid";

const item = (img, name, cost)=>{
    return{img, name, cost};
}

const addToCart = (val)=>{
    console.log(val);
}
const Products = () => {
    let titems = [];
    titems.push(item(lampOil, "Lamp Oil", 10));
    titems.push(item(lampOil, "Lamp Oil2", 10));
    titems.push(item(lampOil, "Lamp Oil3", 10));

    let [items, setItems] = useState(titems);
    let cards = [];
    for(let i =0; i < items.length; ++i){
        // console.log(items[i]);
        cards.push(<Item img = {items[i].img} cost = {items[i].cost} name = {items[i].name} btn = {addToCart} key ={uniqid()}/>);   
    }
    return (
      <div className="items">
        {cards}
      </div>
    );
  };
  
  export default Products;
import React, { useState, useEffect } from "react";

const Item = (props) => {
  let [count, setCount] = useState(0);
  // useEffect(() => {
  //   // Do something
  //    document.getElementById(props.name).value = count;
  // }, [count]);
  const handleChange = (e) => {
    console.log(e.target.value);
    setCount(e.target.value);
  };
  const increment = (num) => {
    let cpy = Number(count) + Number(num);
    console.log(num);
    if (cpy > 99 || cpy < 0) {
      return;
    }
    setCount(cpy);
  };
  return (
    <div>
      <div className="card">
        <img src={props.img} className="cardImg"></img>
        <div className="cardText">
          {props.name}
          <div className="cost">{props.cost} Rubies</div>
        </div>
        <span className="quantity">
          <label>Quantity </label>
          <input
            type="number"
            onChange={handleChange}
            value={count}
            id={props.name}
            min={0}
            max={99}
          ></input>
          <div className="increment">
            <button
              onClick={() => {
                increment(1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                increment(-1);
              }}
            >
              -
            </button>
          </div>
        </span>
        <button
          onClick={() => {
            props.btn(
              document.getElementById(props.name).value,
              props.cartSize,
              props.setCartSize,
            );
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;

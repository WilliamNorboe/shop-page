
import './shop-page.css';
import cart from "./images/cart.png";
import Item from "./item.js";
import lampOil from "./images/lampoil.webp";
import Products from './items';

const ShopPage = () => {
    return (
      <div>
        <div id = "top">
            <div className = "App-header">Shop Page</div>
            <div className="cart">
                <img className="icon" src = {cart} alt = "Cart"></img>
                <div id = "numItems">0</div>
            </div>
        </div>
        <Products />
      </div>
    );
  };
  
  export default ShopPage;
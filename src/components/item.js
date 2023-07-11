

const Item = (props) => {
    return (
      <div>
        <div className='card'>
            <img src = {props.img} className='cardImg'></img>
            <div className='cardText'>{props.name}<div className='cost'>{props.cost} Rubies</div></div>
            <span className='quantity'>
                <label>Quantity </label>
                <input type = "number" id = {props.name}></input>
            </span>
            <button onClick={()=>{props.btn(document.getElementById(props.name).value)}}>Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default Item;
import React from 'react';
import { Link } from 'react-router-dom';
function CartItem(props) {
  let condition = props.favourites.filter(data => data.id === props.product.id)
  let toggle;
  if (condition.length === 0) {
    toggle = <span onClick={() => props.addToFavorites(props.product)} id="heart" class="material-icons-outlined">favorite_border</span>;
  } else if (condition.length > 0) {
    toggle =   <span onClick={() => props.addToFavorites(props.product)} id="heart" class="material-icons-outlined">favorite</span>
  }
  return (
  
    <div class="item">  
     <Link to={`/details/${props.product.id}`} style={{ textDecoration: 'none' }}>
      <div class="image">
        <img src={props.product.imageURL[0]} alt={props.product.name}/> 
      </div>
      </Link>

      <div class="center">
        <p class="brand">{props.product.brand}</p>
        <p class="name">{props.product.name}</p>
        <p class="price">${(props.product.price).toFixed(2)}</p>
      </div>
     
      <div class="icons">
        <div class="listToggle">
            {toggle}
        </div>
        <div class="delete" onClick={() => props.addToCart(props.product)} >
          <span class="material-icons-outlined">delete</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutItem(props) {

  return (
  
    <div class="item">  
      <div class="image">
        <img src={props.product.imageURL[0]} alt={props.product.name}/> 
      </div>

      <div class="center">
        <p class="brand">{props.product.brand}</p>
        <p class="name">{props.product.name}</p>
        <p class="price">${(props.product.price).toFixed(2)}</p>
      </div>
     
    </div>
  );
}

export default CheckoutItem;

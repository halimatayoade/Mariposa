import React from 'react';
import { Link } from 'react-router-dom';
function Product(props) {
  
  return (
  
    <div class="product">  
     <Link to={`/details/${props.product.id}`} style={{ textDecoration: 'none' }}>
      <img src={props.product.imageURL[0]} alt={props.product.name}/>
      <p class="brand">{props.product.brand}</p>
      <p class="name">{props.product.name}</p>
      <p class="price">${(props.product.price).toFixed(2)}</p>
      </Link>
      <div data-toggled="true" class="listToggle">
        <span id="heart" class="material-icons-outlined">
          favorite_border
        </span>
        <span id="heart" class="material-icons-outlined">
          favorite
        </span>
      </div>
      <p><button onClick={() => props.addToCart(props.product)}>Add to Cart</button></p>
    </div>
  );
}

export default Product;

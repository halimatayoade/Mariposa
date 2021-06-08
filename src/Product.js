import React from 'react';

function Product(props) {
  return (
    <div class="product">
      <img src={props.product.imageURL[0]} alt={props.product.name}/>
      <p class="brand">{props.product.brand}</p>
      <p class="name">{props.product.name}</p>
      <p class="price">${props.product.price}</p>
      <div data-toggled="true" class="listToggle">
        <span id="heart" class="material-icons-outlined">
          favorite_border
        </span>
      </div>
      <p><button>Add to Cart</button></p>
    </div>
  );
}

export default Product;

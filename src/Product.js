import React from 'react';
import { Link } from 'react-router-dom';
function Product(props) {

  let condition = props.favourites.filter(data => data.id === props.product.id)
  let toggle;
  if (condition.length === 0) {
    toggle = <span onClick={() => props.addToFavorites(props.product)} id="heart" class="material-icons-outlined">favorite_border</span>;
  } else if (condition.length > 0) {
    toggle =   <span onClick={() => props.addToFavorites(props.product)} id="heart" class="material-icons-outlined">favorite</span>
  }
  
  return (
  
    <div class="product">  
     <Link to={`/details/${props.product.id}`} style={{ textDecoration: 'none' }}>
      <img src={props.product.imageURL[0]} alt={props.product.name}/>
      <p class="brand">{props.product.brand}</p>
      <p class="name">{props.product.name}</p>
      <p class="price">${(props.product.price).toFixed(2)}</p>
      </Link>
      <div class="listToggle">
        {toggle}
      </div>
      <p><button onClick={() => props.addToCart(props.product)}>Add to Bag</button></p>
    </div>
  );
}

export default Product;

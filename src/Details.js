import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './product-pages.css';

const Details = (props) => {
  const { id } = useParams();
  let item = props.allproducts.filter(data => data.id == id);
  let product = item[0];

  let condition = props.favourites.filter(data => data.id === product.id)
  let toggle;
  if (condition.length === 0) {
    toggle = <span onClick={() => props.addToFavorites(product)} id="heart" class="material-icons-outlined">favorite_border</span>;
  } else if (condition.length > 0) {
    toggle =   <span onClick={() => props.addToFavorites(product)} id="heart" class="material-icons-outlined">favorite</span>
  }

  return (
    <>
    <div className="product-content">
      <div class="product-details">
        <div className="left">
        {product.imageURL.map((char, index) => (
          <div><img src={char} /></div>
        ))}
        </div>
        <div className="right">
          <h3>{product.name}</h3>
          <div className="stars restaurant-rating" style={{ "--rating": product.rating }}>{product.rating}</div>
          {toggle}
          <p>{product.description}</p>
          <p>{product.ingredients}</p>
          <button onClick={() => props.addToCart(product)} className="add-to-bag">Add to Bag</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Details;


import React from 'react';
import CartItem from './CartItem'
import './cart.css';
const Favourites = (props) => {
  return (
    <div className="shoppingCart">
      <h1>Shopping Bag</h1>
      <div className="title">
        <div className="items">
        <h2>There are {props.favourites.length} items in your favourites</h2>
          {
            props.favourites
            .map((product) => (
              <CartItem key={product.id} product={product} addToCart={props.addToCart} favourites={props.favourites} addToFavorites={props.addToFavorites} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Favourites;

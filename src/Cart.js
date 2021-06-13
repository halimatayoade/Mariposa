import React from 'react';
import CartItem from './CartItem'
import './cart.css';
const Cart = (props) => {
  let prices = parseFloat(props.cart.reduce((acc, ci) => acc + ci.price, 0).toFixed(2));
  let delivery;
  if (prices < 100) {
    delivery = 7.99;
  } else {
    delivery = 0.00;
  }

  return (
    <div className="shoppingCart">
      <h1>Shopping Bag</h1>
      <div className="title">
        <div className="items">
        <h2>There are {props.cart.length} items in the cart</h2>
          {
            props.cart
            .map((product) => (
              <CartItem key={product.id} product={product} addToCart={props.addToCart} favourites={props.favourites} addToFavorites={props.addToFavorites} />
            ))
          }
        </div>
        <div className="prices">
          <div className="orderValue"><div id="text">Order Value:</div><div id="value">${(prices).toFixed(2)}</div></div>
          <div className="delivery"><div id="text">Delivery:</div><div id="value">{(delivery == 0) ? 'FREE' : `$${(delivery).toFixed(2)}`}</div></div>
          <div className="total"><div id="text">Total:</div><div id="value"> ${(prices + delivery).toFixed(2)}</div></div>
          <button class="checkout">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;

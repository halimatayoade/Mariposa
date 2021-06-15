import React from 'react';
import CartItem from './CartItem'
import './cart.css';
import { Link, useHistory } from 'react-router-dom';
const Cart = (props) => {
  let prices = parseFloat(props.cart.reduce((acc, ci) => acc + ci.price, 0).toFixed(2));
  let delivery;
  let total;
  if (prices < 50) {
    delivery = 7.99;
    total = prices + delivery;
  } else {
    delivery = 0.00;
    total = prices;
  }
  props.balance(total.toFixed(2))
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
          <div className="delivery"><div id="text">Delivery:</div><div id="value">{(delivery === 0 ) ? 'FREE' : `$${(delivery).toFixed(2)}`}</div></div>
          <div className="total"><div id="text">Total:</div><div id="value">{(prices > 50) ? `$${total.toFixed(2)}` :  `${(total).toFixed(2)}`}</div></div>
          <div className="total">{(prices < 50) ? `$${(50 - prices).toFixed(2)} till free shipping` : false}</div>
          <Link to="/checkout"><button class="checkout">Checkout</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart;

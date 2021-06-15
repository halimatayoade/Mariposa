import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CheckoutItem from './CheckoutItem'
import './cart.css';
const Checkout = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>Checkout</h1>
      <div className="shoppingCart">
        <div className="title">
          <div className="items">
            {
              props.cart
                .map((product) => (
                  <CheckoutItem key={product.id} product={product} addToCart={props.addToCart} favourites={props.favourites} addToFavorites={props.addToFavorites} />
                ))
            }
            <div className="total" style={{ "font-size": "40px", "padding": "10px" }}>{`Total: $${props.cost}`}</div>
            <h3>Billing Address</h3>
          {(props.user.address === null) ?
            <table>
              <tr>
                <th>Name</th>
                <td>{props.user.fname}{" "}{props.user.lname}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{props.user.email}</td>
              </tr>
            </table>
            :
            <table>
              <tr>
                <th>Name</th>
                <td>{props.user.fname}{" "}{props.user.lname}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{props.user.email}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{props.user.address},{props.user.city},{props.user.province}</td>
              </tr>
              <tr>
                <th>Postal Code</th>
                <td>{props.user.postalCode}</td>
              </tr>
            </table>
          }
          </div>
          <div className="prices">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{ "color": "navy" }}></i>
              <i class="fa fa-cc-amex" style={{ "color": "blue" }}></i>
              <i class="fa fa-cc-mastercard" style={{ "color": "red" }}></i>
              <i class="fa fa-cc-discover" style={{ "color": "orange" }}></i>
            </div>
            <form>
              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
              <label for="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" />
              <label for="expyear">Exp Year</label>
              <input type="text" id="expyear" name="expyear" placeholder="2018" />
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352" />
              <input type="submit" value="Continue to checkout" class="btn"></input>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Checkout;

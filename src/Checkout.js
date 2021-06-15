import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CheckoutItem from './CheckoutItem'
import './cart.css';
const Checkout = (props) => {
  let time = new Date();
  const history = useHistory();
  const [cardNum, setCardNum] = useState("");
  const [expMonth, setMonth] = useState("");
  const [expYear, setYear] = useState("");
  const [cvv, setCVV] = useState("")

  const placeOrder = async e => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/users/${props.user.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: props.user.email,
        password: props.user.password,
        fname: props.user.fname,
        lname: props.user.lname,
        address: props.user.address,
        cardNum: `${cardNum}`,
        expMonth: `${expMonth}`,
        expYear: `${expYear}`,
        cvv: `${cvv}`,
        time: time,
        city: props.user.city,
        province: props.user.province,
        postalCode: props.user.postalCode,
        orders: props.cart,
        cost: 0,
        id: props.user.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    props.checkout()
    const user = await response.json();
    props.currentUser(user);
    history.push("/");
  }



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
            <form class="checkout-form" onSubmit={placeOrder}>
              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" value={cardNum} onChange={e => setCardNum(e.target.value)} />
              <label for="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" value={expMonth} onChange={e => setMonth(e.target.value)} />
              <label for="expyear">Exp Year</label>
              <input type="text" id="expyear" name="expyear" placeholder="2018" value={expYear} onChange={e => setYear(e.target.value)} />
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352" value={cvv} onChange={e => setCVV(e.target.value)} />
              {(cardNum.length === 0 || expMonth.length === 0 || expYear.length === 0 || cvv.length === 0)
                ?
                <input type="submit" disabled value="Place Order" class="btn"></input>
                :
                <input type="submit" value="Place Order" class="btn"></input>
              }

            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Checkout;

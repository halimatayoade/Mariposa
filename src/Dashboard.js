import React, { useState } from 'react';
import './dashboard.css';
import { Button, TextField, Link as MaterialLink } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
const Dashboard = (props) => {
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("")

  return (
    <section>
      <div className="account">
        <div className="title">
          <h1>My Account</h1>
        </div>

        <h3>Order History</h3>
        <p>No orders have been placed</p>

        <h3>Account Details</h3>
        { (props.user.address === null) ?
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
      {(props.user.address === undefined) ? 
        <>
          <h3>Address Details</h3>
          <Link to="add-address"><button>Add a new address</button></Link>
        </>
        :
        ""
      }
      </div>
    </section>
  )
}

export default Dashboard;
{/* <TextField label="address" type="text" required fullWidth margin="normal" value={address} onChange={e => setAddress(e.target.value)} />
        <TextField label="city" type="text" required fullWidth margin="normal" value={city} onChange={e => setCity(e.target.value)} />
        <TextField label="province" type="text" required fullWidth margin="normal" value={province} onChange={e => setProvince(e.target.value)} />
        <TextField label="postal code" type="text" required fullWidth margin="normal" value={postalCode} onChange={e => setPostalCode(e.target.value)} /> */}
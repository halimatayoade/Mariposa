import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
const Address = (props) => {
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("")

  
  const add = async e => {
    e.preventDefault();

      const response = await fetch( `http://localhost:5000/users/${props.user.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "ayoadehal@gmail.com",
          password: "lps",
          fname: "Hali",
          lname: "Ayoade",
          address: `${address}`,
          city: `${city}`,
          province: `${province}`,
          postalCode: `${postalCode}`,
          orders: [
            {}
          ],
          cost: 0,
          id: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const user = await response.json();
      props.currentUser(user);
      history.push("/my-account");
  }


  return (
    <>
    <h1>Add your address</h1>
    <form onSubmit={add}>
        Address
        <input type="text" required fullWidth margin="normal" value={address} onChange={e => setAddress(e.target.value)} />
        City
        <input label="city" type="text" required fullWidth margin="normal" value={city} onChange={e => setCity(e.target.value)} />
        Province
        <input label="province" type="text" required fullWidth margin="normal" value={province} onChange={e => setProvince(e.target.value)} />
        Postal Code
        <input label="postal code" type="text" required fullWidth margin="normal" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
    
    { (address.length === 0||city.length === 0||province.length===0||postalCode.length===0)
      ?
      <Button disabled type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Confirm
      </Button>
      :
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Confirm
      </Button>
    }
    </form>

    </>
  )
}

export default Address;

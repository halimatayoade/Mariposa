import React, { useState } from 'react'
import {Button, TextField, Link as MaterialLink} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function SignUp(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const signUp = async e => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      const response = await fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, fname, lname})
      });

      const user = await response.json();
      props.currentUser(user);
      history.push("/");

    } else {
      setError("Passwords don't match");
    }
  }

  return (
    <>
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
        <TextField label="first name" type="text" required fullWidth margin="normal" value={fname} onChange={e => setFName(e.target.value)} />
        <TextField label="last name" type="text" required fullWidth margin="normal" value={lname} onChange={e => setLName(e.target.value)} />
        {/* <TextField label="address" type="text" required fullWidth margin="normal" value={address} onChange={e => setAddress(e.target.value)} />
        <TextField label="city" type="text" required fullWidth margin="normal" value={city} onChange={e => setCity(e.target.value)} />
        <TextField label="province" type="text" required fullWidth margin="normal" value={province} onChange={e => setProvince(e.target.value)} />
        <TextField label="postal code" type="text" required fullWidth margin="normal" value={postalCode} onChange={e => setPostalCode(e.target.value)} /> */}
        <TextField label="email" type="email" required fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField error={error.length > 0} label="password" type="password" required fullWidth margin="normal" value={password} onChange={e => {setPassword(e.target.value); setError("")}} />
        <TextField helperText={error} error={error.length > 0} label="password-confirm" type="password" required fullWidth margin="normal" value={passwordConfirmation} onChange={e => {setPasswordConfirmation(e.target.value); setError("")}} />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
          Sign-Up
        </Button>
        <p>
          Already have an account?{" "}
          <MaterialLink component={Link} to="/login">
            Login
          </MaterialLink>{" "}
          instead!
        </p>
      </form>
    </>
  );
}

export default SignUp
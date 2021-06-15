import React, { useState } from 'react'
import { Button, TextField, Link as MaterialLink } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';

function Login(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async e => {
    e.preventDefault();
    
    const response = await fetch(`http://localhost:5000/users?email=${email}`);
    const users = await response.json();

    if (users.length > 0 && users[0].password === password) {
      props.currentUser(users[0]);
      history.push("/");
    } else {
      setError("Either the username or password don't match")
    }

  }

  return (
    <>
      <form onSubmit={login}>
        <h1>Login</h1>
        {
          error.length > 0 &&
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
        }
        <TextField label="email" type="email" required fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)}/>
        <TextField label="password" type="password" required fullWidth  margin="normal" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button type="submit" variant="contained" color="primary" style={{marginTop: "20px"}}>
          Login
        </Button>
        <p>Don't have an account? <MaterialLink component={Link} to="/sign-up">Sign-up</MaterialLink> instead!</p>
      </form>
    </>
  )
}

export default Login
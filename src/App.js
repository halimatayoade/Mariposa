import React, { useState, useEffect } from 'react';
import Skincare from './Skincare.js';
import Header from './Header';
import Cart from './Cart.js';
import Search from './Search.js';
import Details from './Details.js'
import SignUp from './SignUp';
import Login from './Login';
import { Container } from '@material-ui/core';
import { Switch, Route, useHistory } from "react-router-dom";
import Favourites from './Favourites.js';
import Dashboard from "./Dashboard";
import Checkout from "./Checkout";

const App = () => {
  const history = useHistory();
  const [allproducts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [user, setUser] = useState();
  const [cost, setCost] = useState()


  useEffect(() => {
    const cart = localStorage.getItem('shoppingCart');
    setCart(JSON.parse(cart) || []);
    const user = localStorage.getItem('users');
    setUser(JSON.parse(user) || []);
    const favourites = localStorage.getItem('favItems');
    setFavourites(JSON.parse(favourites) || []);
    async function fetchData() {
      let response = await fetch(` http://localhost:5000/products`)
      let items = await response.json();
      console.log(items)
      setProducts(items)
    }
    fetchData();
  }, []);

  const balance = cost => {
    setCost(cost)
  }

  const currentUser = user => {
    setUser(currentUser => {
      const p = user;
      localStorage.setItem('users', JSON.stringify(p));
      return p;
    });
  }

  const logout = () => {
    setUser();
  }

  const addToCart = (item) => {
    let condition = cart.filter(data => data.id === item.id)
    if (condition.length === 0) {
      setCart(currentList => {
        const cart = [...currentList.filter(product => product.id !== item.id), item];
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        return cart;
      });
    } else if (condition.length > 0) {
      setCart(currentList => {
        const cart = currentList.filter(product => product.id !== item.id);
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        return cart;
      })
    }
  }

  const addToFavorites = (item) => {
    let condition = favourites.filter(data => data.id === item.id)
    if (condition.length === 0) {
      setFavourites(currentList => {
        const favourites = [...currentList.filter(product => product.id !== item.id), item];
        localStorage.setItem('favItems', JSON.stringify(favourites));
        return favourites;
      });
    } else if (condition.length > 0) {
      setFavourites(currentList => {
        const favourites = currentList.filter(product => product.id !== item.id);
        localStorage.setItem('favItems', JSON.stringify(favourites));
        return favourites;
      })
    }
  }

  return (
    <>
      <Header logout={logout} currentUser={user} />
      <Switch>
        <Route exact path="/">
          {user && user.email}
          <h1>hi</h1>
        </Route>
        <Route exact path="/skin-care">
          <Skincare allproducts={allproducts} cart={cart} favourites={favourites} addToCart={addToCart} addToFavorites={addToFavorites} user={user}></Skincare>
        </Route>
        <Route path="/cart">
          <Cart  balance={balance} cart={cart} favourites={favourites} addToCart={addToCart} addToFavorites={addToFavorites} />
        </Route>
        <Route path="/favourites">
          <Favourites cart={cart} favourites={favourites} addToCart={addToCart} addToFavorites={addToFavorites} />
        </Route>
        <Route path="/search">
          <Search cart={cart} favourites={favourites} allproducts={allproducts} addToCart={addToCart} addToFavorites={addToFavorites} />
        </Route>
        <Route path="/details/:id">
          <Details allproducts={allproducts} favourites={favourites} cart={cart} addToCart={addToCart} addToFavorites={addToFavorites} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp currentUser={currentUser}></SignUp>
        </Route>
        <Route exact path="/login">
          <Login currentUser={currentUser}></Login>
        </Route>
        <Route path="/my-account">
          <Dashboard user={user} logout={logout} ></Dashboard>
        </Route>
        <Route path="/checkout">
          <Checkout cost={cost} user={user} logout={logout} ></Checkout>
        </Route>
    </Switch>
    </>
  );

}

export default App;

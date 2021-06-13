import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import Header from './Header';
import Cart from './Cart.js';
import Search from './Search.js';
import Details from './Details.js'
import { Switch, Route} from "react-router-dom";
import Favourites from './Favourites.js';

const App = () => {
  const [allproducts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const cart = localStorage.getItem('shoppingCart');
    setCart(JSON.parse(cart) || []);
    const favourites = localStorage.getItem('favItems');
    setCart(JSON.parse(favourites) || []);
    async function fetchData() {
      let response = await fetch(` http://localhost:5000/products`)
      let items = await response.json();
      console.log(items)
      setProducts(items)
    }
    fetchData();
  }, []);

  const addToCart = (item) => {
    let condition = cart.filter(data => data.id === item.id)
    if(condition.length === 0) {
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
    if(condition.length === 0) {
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
      <Header/>
      <Switch>
       <Route exact path="/">
          <div class="content">
            <h2>All Products</h2>
            <div class="products">
              {
                allproducts
                  .map((product) => (
                    <Product key={product.id} product={product} cart={cart} favourites={favourites} addToCart={addToCart} addToFavorites={addToFavorites}  />
                  ))
              }
            </div>
          </div>
        </Route>
        <Route path="/cart">
          <Cart cart={cart} favourites={favourites} addToCart={addToCart}  addToFavorites={addToFavorites}/>
        </Route>
        <Route path="/favourites">
          <Favourites cart={cart} favourites={favourites} addToCart={addToCart}  addToFavorites={addToFavorites}/>
        </Route>
        <Route path="/search">
          <Search cart={cart} favourites={favourites} allproducts={allproducts} addToCart={addToCart} addToFavorites={addToFavorites}/>
        </Route>
        <Route path="/details/:id">
          <Details allproducts={allproducts} favourites={favourites} cart={cart}  addToCart={addToCart} addToFavorites={addToFavorites}/>
        </Route>
      </Switch>
    </>
  );

}

export default App;

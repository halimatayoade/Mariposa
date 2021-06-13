import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import Header from './Header';
import Cart from './Cart.js';
import Search from './Search.js';
import { Switch, Route} from "react-router-dom";

const App = () => {
  const [allproducts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cart = localStorage.getItem('shoppingCart');
    setCart(JSON.parse(cart) || []);
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
                    <Product key={product.id} product={product} addToCart={addToCart} />
                  ))
              }
            </div>
          </div>
        </Route>
        <Route path="/cart">
          <Cart cart={cart} addToCart={addToCart}/>
        </Route>
        <Route path="/search">
          <Search allproducts={allproducts} addToCart={addToCart}/>
        </Route>
      </Switch>
    </>
  );

}

export default App;

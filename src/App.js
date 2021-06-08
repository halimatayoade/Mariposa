import React, { useState, useEffect } from 'react';
import Product from './Product.js';
const App = () => {
  const [allproducts, setProducts] = useState([]);
  useEffect(() => {
    const products = localStorage.getItem('products');
    async function fetchData() {
      let response = await fetch(` http://localhost:5000/products`)
      let items = await response.json();
      console.log(items)
      setProducts(items)
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        <div class="left">
          <h1>MARIPOSA</h1>
        </div>
        <li class="search">
          <i class="material-icons-outlined">search</i>
          <form>
            <input size="40" type="search" id="search-bar" placeholder="Search" />
          </form>
        </li>
        <div class="right">
          <span class="material-icons-outlined">person_outline</span>
          <span id="heart" class="material-icons-outlined">favorite</span>
          <span class="material-icons-outlined">shopping_bag</span>
        </div>
      </header>
      <div class="navbar">
        <div class="container">
          <a href="#">New</a>
          <div class="dropdown">
            <button class="dropbtn">
              Brands
              &nbsp;<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">The Ordinary</a>
              <a href="#">CeraVe</a>
              <a href="#">Glossier</a>
              <a href="#">Neutrogena</a>
              <a href="#">Mario Badescu</a>
              <a href="#">OLAY</a>
            </div>
          </div>
          <a href="#">Regimen Builder</a>
          <div class="dropdown">
            <button class="dropbtn">
              Skincare
              &nbsp;<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">All Skincare</a>
              <a href="#">Serums</a>
              <a href="#">Cleansers</a>
              <a href="#">Moisturizers</a>
              <a href="#">Exfoliator</a>
              <a href="#">Sunscreen</a>
              <a href="#">Eye Cream</a>
              <a href="#">Face Mask</a>
              <a href="#">Facial Oil</a>
              <a href="#">Toner</a>
            </div>
          </div>
          <a href="#">Tools & Assessories</a>
          <a href="#">Under $15</a>
        </div>
      </div>
      <div class="content">
        <h2>All Products</h2>
        <div class="products">
          {
            allproducts
              .map((product) => (
                <Product key={product.id} product={product} />
              ))
          }
        </div>
      </div>
    </>
  );

}

export default App;

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
      <h1>HI!</h1>
      <div className="products">
        {
          allproducts
            .map((product) => (
              <Product key={product.id} product={product} />
            ))
        }
      </div>

    </>
  );

}

export default App;

import React from 'react'
import Product from './Product'

function Skincare(props) {
  return (
    <>
        <div class="content">
            <h2>All Products</h2>
            <div class="products">
              {
                props.allproducts
                  .map((product) => (
                    <Product key={product.id} product={product} cart={props.cart} favourites={props.favourites} addToCart={props.addToCart} addToFavorites={props.addToFavorites} />
                  ))
              }
            </div>
          </div>
    </>
  )
}

export default Skincare
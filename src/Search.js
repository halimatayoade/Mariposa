import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product.js';

const Search = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query')

  let item = props.allproducts.filter(function (currentElement) {
    // the current value is an object, so you can check on its properties
    return (currentElement.name.toLowerCase()).includes(query.toLowerCase()) || currentElement.type === query || (currentElement.type.toLowerCase()).includes(query.toLowerCase()) || (currentElement.brand.toLowerCase()).includes(query.toLowerCase());
  });
  console.log(item)
  return (
    <>
      {
        <>
        <div className="content">
          <h2 className="search-results">Search results for {query}...</h2>
          <div className="products">
            {
              item
                .map((product) => (
                  <Product key={product.id} product={product} addToCart={props.addToCart} />
                ))
            }
          </div>
          </div>
        </>
      }
    </>
  );
}

export default Search;
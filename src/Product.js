import React from 'react';

function Product(props) {
  
  return (
    <div className="product">
      <ol><h1>{props.product.name}</h1></ol>
      {
        props.product.imageURL.map((char) => (
          <img src={char} alt={props.product.name} />
        ))
      }
      <h2>{props.product.rating}/5</h2>
    </div>
    
  );
}

export default Product;

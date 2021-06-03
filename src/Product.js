import React from 'react';

function Product(props) {

  return (
    <div className="product">
      <h1>{props.product.name}</h1>
      <img 
        src={props.product.imageURL} 
        alt={props.product.name} 
      />
      <h2>{props.product.rating}/5</h2>
    </div>
    
  );
}

export default Product;

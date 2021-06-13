import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import './product-pages.css';

const Details = (props) => {
  const { id } = useParams();
  let item = props.allproducts.filter(data => data.id == id);


  return (
    <>
      <div class="product-details">
        {item[0].imageURL.map((char, index) => (
          <img src={char}/>
        ))}
        <h1>{item[0].name}</h1>
        <div className="stars restaurant-rating" style={{ "--rating": item[0].rating }}></div>
        <p>{item[0].description}</p>
        <p>{item[0].ingredients}</p>
      </div>
    </>
  );
}

export default Details;

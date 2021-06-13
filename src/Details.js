import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './product-pages.css';

const Details = (props) => {
  const { id } = useParams();
  let item = props.allproducts.filter(data => data.id == id);


  return (
    <>
    <div className="product-content">
      <div class="product-details">
        <div className="left">
          <div class="slideshow-container">
            <div class="mySlides fade">
              <img src={item[0].imageURL[0]} style="width:100%"/>
            </div>
            <div class="mySlides fade">
              <img src={item[0].imageURL[1]} style="width:100%"/>
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
          <br/>
          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
          </div>
        </div>
        <div className="right">
          <h3>{item[0].name}</h3>
          <div className="stars restaurant-rating" style={{ "--rating": item[0].rating }}>{item[0].rating}</div>
          <span id="heart" class="material-icons-outlined">
            favorite_border
            </span>
          <span id="heart" class="material-icons-outlined">
            favorite
          </span>
          <p>{item[0].description}</p>
          <p>{item[0].ingredients}</p>
          <button>Add to Bag</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Details;


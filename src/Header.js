import React from 'react';
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
     <header>
        <div class="left">
        <Link to="/"><h1>MARIPOSA</h1></Link>
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
          <Link to="/cart"><span class="material-icons-outlined">shopping_bag</span></Link>
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
          <a href="#">Skincare</a>
          <a href="#">Tools & Assessories</a>
          <a href="#">Under $15</a>
        </div>
      </div>
    </>
  );
}

export default Header;
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
const Header = (props) => {
  const [filterInput, setFilterInput] = useState("")
  const history = useHistory();

  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
  }

  const onSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/search',
      search: `query=${filterInput}`
    });
  }

  return (
    <>
     <header>
        <div class="left">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h1>MARIPOSA</h1></Link>
        </div>
        <li class="search">
          <i class="material-icons-outlined">search</i>
          <form id="search" className="search" onSubmit={onSearch}>
            <input size="40" type="search" id="search-bar" placeholder="Search" value={filterInput} onChange={updateFilterInput}/>
          </form>
        </li>
        <div class="right">
        {
          props.currentUser ?
          <>
          <Button onClick={props.logout} color="inherit"><Link style={{ textDecoration: 'none', color: 'black' }}to="/">Logout</Link></Button>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/my-account"><span class="material-icons-outlined">person_outline</span></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/favourites"><span id="heart" class="material-icons-outlined">favorite</span></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/cart"><span class="material-icons-outlined">shopping_bag</span></Link>
          </>
          :
          <Button component={Link} to="/login" color="inherit">Login</Button>
        }
        </div>
      </header>
      <div class="navbar">
        <div class="container">
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
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/skin-care">Products</Link>
          <a href="#">Under $15</a>
        </div>
      </div>
    </>
  );
}

export default Header;

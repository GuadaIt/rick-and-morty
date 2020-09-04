import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img id="header-img" src={require("../../assets/rick-and-morty-logo.png")} alt="rick and morty logo"/>
    </header>
  )
};

export default Header;
import React from 'react';
import './Header.css';
import headerImg from '../../assets/rick-and-morty-logo.png';

const Header = () => (
  <header>
    <img id="header-img" src={headerImg} alt="rick and morty logo" />
  </header>
);

export default Header;


import React from 'react';
import Cart from './Cart';
import '../css/Header.css';


const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">My Store</h1>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
};

export default Header;

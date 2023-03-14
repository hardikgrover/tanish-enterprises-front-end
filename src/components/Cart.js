import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Cart.css';

const Cart = () => {
    const cartItems = useSelector(state=> state.cart) || [];
    const cartItemCount = cartItems.length;

  return (
    <button className="cart-button">
      <i className="fa fa-shopping-cart"></i>
      <span className="cart-count">{cartItemCount}</span>
    </button>
  );
};

export default Cart;

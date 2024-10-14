import React from 'react';
import { Link } from 'react-router-dom';
import './OrderNowButton.css';

function OrderNowButton () {
  return (
    <Link className='order-now-btn' to='/all-products'>Order Now</Link>
  );
}

export default OrderNowButton;
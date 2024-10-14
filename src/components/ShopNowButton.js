import React from 'react';
import { Link } from 'react-router-dom';
import './ShopNowButton.css';

function ShopNowButton () {
  return (
    <Link className='shop-now-btn' to='/all-products'>Shop Now</Link>
  );
}

export default ShopNowButton;
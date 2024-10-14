import React from 'react';
import { Link } from 'react-router-dom';
import './ShopNowButtonOutline.css';

function ShopNowButtonOutline () {
  return (
    <Link className='shop-now-btn-outline' to='/all-products'>Shop Now</Link>
  );
}

export default ShopNowButtonOutline;
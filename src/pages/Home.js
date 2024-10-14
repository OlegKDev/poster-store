import React from 'react';
import ShopNowButton from '../components/ShopNowButton';
import OrderNowButton from '../components/OrderNowButton';
import ShopNowButtonOutline from '../components/ShopNowButtonOutline';
import homeHeader from '../assets/images/home/home-header.jpg';
// import homeBg1 from '../assets/images/home/home-bg-1.png';
import homeBg2 from '../assets/images/home/home-bg-2.png';
import homeBg3 from '../assets/images/home/home-bg-3.webp';
import './Home.css';

function Home () {
  return (<>
    {/* Header */}
    <div className='home__header'>
      <div className='home__header-left' style={{ backgroundImage: `url(${homeHeader})` }}></div>

      <div className='home__header-right'>
        <div className='header-right__wrapper'>
          <div className='header-right__title'>New Collection</div>
          <div className='header-right__content'>
            <span>STYLE</span><br />
            <span>YOUR</span><br />
            <span>WALLS</span>
          </div>
          <ShopNowButton />
        </div>
      </div>
    </div>

    {/* Promotion */}
    <div className='home__promotion'>
      <div className="promotion-left-container" style={{ backgroundImage: `url(${homeBg3})` }}>
        <div className="text-overlay">
          <div className='text-overlay__title'>Free</div>
          <div className='text-overlay__content'>
            <span>SHIPPING</span><br />
            <span>WORLDWIDE</span>
          </div>
          <ShopNowButtonOutline />
        </div>
      </div>

      <div className='promotion-right-container' style={{ backgroundImage: `url(${homeBg2})` }}>
        <div className="text-overlay">
          <div className='text-overlay__title'>Don&apos;t Miss</div>
          <div className='text-overlay__content'>
            <span>40% OFF YOUR</span><br />
            <span>SECOND POSTER</span>
          </div>
          <OrderNowButton />
        </div>
      </div>
    </div>

    text
  </>);
}

export default Home;
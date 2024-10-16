import React from 'react';
import ShopNowButton from '../components/ShopNowButton';
import OrderNowButton from '../components/OrderNowButton';
import ShopNowButtonOutline from '../components/ShopNowButtonOutline';
import homeHeader from '../assets/images/home/home-header.jpg';
// import homeBg1 from '../assets/images/home/home-bg-1.png';
import homeBg2 from '../assets/images/home/home-bg-2.png';
import homeBg3 from '../assets/images/home/home-bg-3.webp';
import homeContentFrameImage from '../assets/images/home/home-content-slider-3.jpg';
import homeContentPoster1 from '../assets/images/home/home-poster-1.png';
import homeContentPoster2 from '../assets/images/home/home-poster-2.png';
import './Home.css';

function Home() {
  return (<>
    {/* Header */}
    <div className='home__header p'>
      <div className='home__header-left-container y' style={{ backgroundImage: `url(${homeHeader})` }}></div>

      <div className='home__header-right-container g'>
        <div className='home__header-wrapper'>
          <div className='home__header-title'>New Collection</div>
          <div className='home__header-content'>
            <span>STYLE</span><br />
            <span>YOUR</span><br />
            <span>WALLS</span>
          </div>
          <ShopNowButton />
        </div>
      </div>
    </div>

    <div className='home__page-container b'>

      {/* Promotion */}
      <div className='home__promotion g'>
        <div className="home__promotion-left-container y" style={{ backgroundImage: `url(${homeBg3})` }}>
          <div className="home__promotion-text-overlay">
            <div className='home__promotion-text-overlay-title'>Free</div>
            <div className='home__promotion-text-overlay-content'>
              <span>SHIPPING</span><br />
              <span>WORLDWIDE</span>
            </div>
            <ShopNowButtonOutline />
          </div>
        </div>

        <div className='home__promotion-right-container b' style={{ backgroundImage: `url(${homeBg2})` }}>
          <div className="home__promotion-text-overlay">
            <div className='home__promotion-text-overlay-title'>Don&apos;t Miss</div>
            <div className='home__promotion-text-overlay-content'>
              <span>40% OFF YOUR</span><br />
              <span>SECOND POSTER</span>
            </div>
            <OrderNowButton />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='home__content y'>
        <div className='home__content-row r'>
          <div className='home__content-column y'>
            <div className='home__content-column-wrapper'>
              <div className='home__content-title'>
                <span>FRESH</span><br />
                <span>POSTERS</span>
              </div>
              <div className='home__content-subtitle'>This Summer</div>
              <div className='home__content-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, reiciendis!
              </div>
            </div>
          </div>
          <div className='home__content-column g'>
            <div className='home__content-frame-wrapper'>
              <img className='home__content-frame-image' src={homeContentFrameImage} />
              <div className='home__content-black-frame'></div>
            </div>
          </div>
        </div>

        <div className='home__content-row p'>
          <div className='home__content-column home__content-column--height b'>
            <div className='home__content-poster-wrapper home__content-poster-wrapper-opt1'>
              <img className='home__content-poster-image'
                src={homeContentPoster1} />
              <div className='home__content-poster-text'>
                <span>TROPICAL</span><br />
                <span>COLLECTION</span>
              </div>
              <ShopNowButtonOutline />
            </div>
          </div>
          <div className='home__content-column home__content-column--height g'>
            <div className='home__content-poster-wrapper home__content-poster-wrapper-opt2'>
              <img className='home__content-poster-image'
                src={homeContentPoster2} />
              <div className='home__content-poster-text'>
                <span>FREEDOM</span><br />
                <span>COLLECTION</span>
              </div>
              <ShopNowButtonOutline />
            </div>
          </div>
        </div>

        <div className='home__content-row'></div>
      </div>
    </div>

    text
  </>);
}

export default Home;
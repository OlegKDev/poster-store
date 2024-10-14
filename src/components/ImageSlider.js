import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import homeContentSlider1 from '../assets/images/home/home-content-slider-1.jpg';
import homeContentSlider2 from '../assets/images/home/home-content-slider-2.png';
import homeContentSlider3 from '../assets/images/home/home-content-slider-3.jpg';

const images = [
  homeContentSlider1,
  homeContentSlider2,
  homeContentSlider3,
];

function ImageSlider () {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {images.map((image, imageIndex) => {
          let position = 'nextSlide';
          if (imageIndex === index) {
            position = 'activeSlide';
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === images.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={imageIndex} className={position}>
              <img src={image} className="person-img" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ImageSlider;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import a from '../assets/a.png';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';

const BannerCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-4 ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        <div>
          <img src={a} alt="Banner 1" />
        </div>
        <div>
          <img src={b} alt="Banner 2" />
        </div>
        <div>
          <img src={c} alt="Banner 3" />
        </div>
        <div>
          <img src={d} alt="Banner 3" />
        </div>
        <div>
          <img src={e} alt="Banner 3" />
        </div>
        <div>
          <img src={f} alt="Banner 3" />
        </div>
        <div>
          <img src={g} alt="Banner 3" />
        </div>
        
      </Carousel>
    </div>
  );
};

export default BannerCarousel; 
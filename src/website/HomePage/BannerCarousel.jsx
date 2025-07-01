import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import a from '../../assets/a.png'
import b from '../../assets/b.jpg'
import c from '../../assets/c.jpg'
import d from '../../assets/d.jpg'
import e from '../../assets/e.jpg'
import f from '../../assets/f.jpg'
import g from '../../assets/g.jpg'


const BannerCarousel = () => {
  return (
    <div className="w-[70%] h-72 mx-auto mt-6 shadow-lg rounded overflow-hidden m-12 left-0 top-0">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        <div className='h-full w-full'>
          <img src={a} alt="Slide 1" />
        </div>
        <div>
          <img src={b} alt="Slide 2" />
        </div>
        <div>
          <img src={c} alt="Slide 3" />
        </div>
        <div>
          <img src={d} alt="Slide 4" />
        </div>
        <div>
          <img src={e} alt="Slide 5" />
        </div>
        <div>
          <img src={f} alt="Slide 6" />
        </div>
        <div>
          <img src={g} alt="Slide 7" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;

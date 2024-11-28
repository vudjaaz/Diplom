import Swiper from 'react-id-swiper';
import React, { useRef, useState, useEffect } from 'react';
import '../../../node_modules/swiper/swiper.scss';
import carouselImg1 from 'assets/media/images/carousel1.jpg';
import carouselImg2 from 'assets/media/images/carousel2.jpg';
import carouselImg3 from 'assets/media/images/carousel3.jpg';
import carouselImg4 from 'assets/media/images/carousel4.jpg';
import carouselImg5 from 'assets/media/images/carousel5.jpg';
import './Swiper.scss';
import About from '../About/About';

const ManipulatingComponentOutSideSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const carouselImgData = [
    {
      id: 1,
      imgPath: carouselImg1,
      imgAlt: 'Стеклянные ограждения',
    },
    {
      id: 2,
      imgPath: carouselImg2,
      imgAlt: 'Стеклянные двери',
    },
    {
      id: 3,
      imgPath: carouselImg3,
      imgAlt: 'Стеклянные перегородки',
    },
    {
      id: 4,
      imgPath: carouselImg4,
      imgAlt: 'Душевые кабины',
    },
    {
      id: 5,
      imgPath: carouselImg5,
      imgAlt: 'Зеркала и панно',
    }
  ];

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on('slideChange', () => {
      setActiveIndex(swiperInstance.activeIndex);
    });
  }, []);

  return (
    <div className="slider">
      <div className='slider-container'>
        <Swiper ref={swiperRef}>
          {carouselImgData.map((imgData, index) => (
            <div className='slider-slide' key={index}>
              <img src={imgData.imgPath} alt={imgData.imgAlt} />
            </div>
          ))}
        </Swiper>
        <div className="buttons-slider-container">
          <div>
            <p>{carouselImgData[activeIndex].imgAlt}</p>
          </div>
          <div className='buttons-slider'>
            <button onClick={goPrev}>&laquo;</button>
            <button onClick={goNext}>&raquo;</button>
          </div>
        </div>
      </div>
      <div className="white-paper">
        <About />
      </div>
    </div>
  );
};

export default ManipulatingComponentOutSideSwiper;

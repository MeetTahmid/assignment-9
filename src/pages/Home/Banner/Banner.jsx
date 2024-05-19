import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../../../assets/car1.jpg';
import bgimg2 from '../../../assets/car2.jpg';
import bgimg3 from '../../../assets/car3.jpg';

const Banner = () => {
  return (
    <div className="mx-auto" >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            h2="Discover A place"
            text="You'll love to live"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            h2="Discover A place"
            text="You'll love to live"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            h2="Discover A place"
            text="You'll love to live"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

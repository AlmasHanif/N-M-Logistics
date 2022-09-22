import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Warehouse from '../../Img/Warehouse.jpg'
import Ship from '../../Img/Ship.jpg'
import Ship1 from '../../Img/Ship1.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import ReviewCard from "./ReviewCard";

export default function ReviewSlider() {
  return (
    <div className="SliderComponent">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Slide 1 */}
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 2 */}
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 3 */}
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 4 */}
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

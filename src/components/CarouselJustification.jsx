import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules'
import { Justificacion } from '../data/Justificacion.js'

// Import required module
export const CarouselJustification = ({rute}) => {
  const modules = [EffectCoverflow, Pagination, Navigation];

  return (
    <>
      (
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={modules}
        className="mySwiper"
      >

        {Justificacion && Justificacion.map(({ img },index) => (
          <SwiperSlide key={index}><img src={rute+'/'+img} alt=""/></SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">

        </div>
      </Swiper>
    </>
  );
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react'
export const SliderQuiver = ({quiver}) => {
  const [localhost, setLocalhost] = useState(null)
  useEffect(() => {
    // Obtener el nombre del host y el puerto
    const host = window.location.hostname
    const port = window.location.port

    setLocalhost(`http://${host}:${port}`)
  }, [])
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {quiver && quiver.map(({ url }, id) => (
          <SwiperSlide key={id}><img src={localhost+'/'+url} alt=""/></SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}
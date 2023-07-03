import React ,{useRef}from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,  EffectCoverflow } from "swiper";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

SwiperCore.use([Navigation,  EffectCoverflow]);

export default function Slider() {

    const swiperRef = useRef();

  return (
    <div className="cpy-8 slider">
      <Swiper
       
        pagination={{ clickable: true, dynamicBullets: true }}
        effect="coverflow"
        centeredSlides={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 35,
          depth: 250,
          modifier: 1,
          slideShadows: true
        }}
        grabCursor="true"
        spaceBetween={0}
        slidesPerView={'3'}
        loop="true"
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          
        style={{  width:"60%" }}
      >
        <SwiperSlide >
        <div className="slider_img"><img src="../assets/img/slider/1.png" alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="slider_img"><img src="../assets/img/slider/2.png" alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider_img"><img src="../assets/img/slider/3.png" alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider_img"><img src="../assets/img/slider/4.png" alt="" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_img"><img src="../assets/img/slider/5.png" alt="" /></div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="slider_img"><img src="../assets/img/slider/6.png" alt="" /></div>
        </SwiperSlide>
       
        
        <div className="slider_custom_btn d-flex justify-content-center gap-3">
            {/* <button className="slider_btn"  ref={prevEl} ><img src="../assets/img/arrow.png" alt="" /></button>
            <button className="slider_btn" ref={prevEl}><img src="../assets/img/arrow2.png" alt="" /></button> */}
            <button className="slider_btn" onClick={() => swiperRef.current?.slidePrev()}><img src="../assets/img/arrow.png" alt="" /></button>
            <button className="slider_btn" onClick={() => swiperRef.current?.slideNext()}><img src="../assets/img/arrow2.png" alt="" /></button>
           
        </div>
        
         
      </Swiper>
    </div>
  );
}

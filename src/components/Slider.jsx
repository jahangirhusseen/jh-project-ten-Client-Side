import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import sliderOne from "../assets/one.jpg";
import sliderTwo from "../assets/two.jpg";
import sliderThree from "../assets/three.jpg";
const Slider = () => {
  return (
    <>
      <Swiper Navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <img src={sliderOne} className="w-full h-screen object-fit" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} className="w-full h-screen object-fit" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderThree}
            className="w-full h-screen object-fit"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import sliderOne from "../assets/pets.jpg";
import sliderTwo from "../assets/adoptions.jpg";
import sliderThree from "../assets/happy owners.jpg";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen w-full flex justify-center items-center"
            style={{ backgroundImage: `url(${sliderOne})` }}
          >
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl  text-center px-4">
              Find Your Furry Friend Today!
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen w-full flex justify-center items-center"
            style={{ backgroundImage: `url(${sliderTwo})` }}
          >
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl  text-center px-4">
              Adopt, Don’t Shop — Give a Pet a Home.
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen w-full flex justify-center items-center"
            style={{ backgroundImage: `url(${sliderThree})` }}
          >
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl  text-center px-4">
              Because Every Pet Deserves Love and Care.
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

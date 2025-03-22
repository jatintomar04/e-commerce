import React from "react";
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <div className="max-w-full mx-auto ">
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Show one slide at a time
        className="shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-blue-500 text-white flex justify-center items-center h-70">
           <img src={image1} alt="" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-green-500 text-white flex justify-center items-center h-70">
          <img src={image2} alt="" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-red-500 text-white flex justify-center items-center h-70">
          <img src={image3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

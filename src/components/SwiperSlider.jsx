import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slider1 from "../assets/01.jpg";
import Slider2 from "../assets/02.jpg";
import Slider3 from "../assets/03.jpg";
import Slider4 from "../assets/04.jpg";

const slidesData = [
  {
    image: Slider1,
    slogan: "Nurture Your Space, Nurture Yourself 🌿",
  },
  {
    image: Slider2,
    slogan: "Breathe Easier with Indoor Greenery 🌿",
  },
  {
    image: Slider3,
    slogan: "Your Personal Indoor Jungle Awaits 🍃",
  },
  {
    image: Slider4,
    slogan: "Low Light? No Problem! 🍃",
  },
];

const SwiperSlider = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[400px]">
              <img
                src={slide.image}
                alt="Plant Slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-4xl font-bold text-center px-4">
                  {slide.slogan}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

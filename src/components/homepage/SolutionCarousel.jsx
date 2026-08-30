// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SolutionCard from "./SolutionCard";

export default function SolutionCarousel() {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        840: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      slidesPerView={2}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SolutionCard />
      </SwiperSlide>
      <SwiperSlide>
        <SolutionCard />
      </SwiperSlide>
      <SwiperSlide>
        <SolutionCard />
      </SwiperSlide>
      <SwiperSlide>
        <SolutionCard />
      </SwiperSlide>
      <SwiperSlide>
        <SolutionCard />
      </SwiperSlide>
    </Swiper>
  );
}

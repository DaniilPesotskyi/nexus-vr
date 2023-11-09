"use client";

import css from "./Slider.module.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { GameDocument } from "@/../../prismicio-types";
import GameCard from "../GameCard/GameCard";

interface IProps {
  items: Array<GameDocument<string> | undefined>;
}

const MySlider: React.FC<IProps> = ({ items }) => {
  return (
    <div className={css.wrap}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={css.sliderItem}>
            <GameCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;

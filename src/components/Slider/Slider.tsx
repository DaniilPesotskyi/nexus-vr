"use client";

import css from "./Slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useState } from "react";

import cn from "classnames";

import { GameDocument } from "@/../../prismicio-types";
import GameCard from "../GameCard/GameCard";

interface IProps {
  items: Array<GameDocument<string> | undefined>;
}

const MySlider: React.FC<IProps> = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const options = {
    appendDots: (dots: any) => <ul className={css.dots}>{dots}</ul>,
    customPaging: (i: number) => (
      <li key={i}>
        <button
          type="button"
          className={cn(css.buttonDot, activeSlide === i && css.active)}
        ></button>
      </li>
    ),
    afterChange: (currentSlide: number) => {
      setActiveSlide(currentSlide);
    },
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className={css.wrap}>
      <Slider {...options} dotsClass={css.dots}>
        {items.map((item, index) => (
          <div key={index} className={css.sliderItem}>
            <GameCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;

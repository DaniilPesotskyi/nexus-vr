"use client";

import css from "./Slider.module.css";

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { GameDocument } from "@/../../prismicio-types";
import GameCard from "../GameCard/GameCard";

interface IProps {
  items: Array<GameDocument<string> | undefined>;
}

const Slider: React.FC<IProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef: React.RefObject<HTMLLIElement> = useRef(null);
  const slideWidth = slideRef.current?.offsetWidth || 0;

  // setTimeout(() => {
  //   if (currentSlide < items.length - 1) {
  //     setCurrentSlide(currentSlide + 1);
  //   } else {
  //     setCurrentSlide(0);
  //   }
  // }, 3000);

  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);

  return (
    <div className={css.wrap}>
      <div className={css.slidesContainer}>
        <ul
          className={css.list}
          style={{
            transform: `translateX(-${currentSlide * slideWidth}px)`,
          }}
        >
          {items.map((item, index) => (
            <li ref={slideRef} key={index}>
              <GameCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      <ul className={css.dots}>
        {items.map((item, index) => (
          <li key={index} className={css.dot}>
            <button
              type="button"
              className={cn(
                css.buttonDot,
                currentSlide === index && css.active
              )}
              onClick={() => setCurrentSlide(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;

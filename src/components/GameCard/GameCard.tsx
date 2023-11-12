"use client";

import css from "./GameCard.module.css";

import { GameDocument } from "@/../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  item: GameDocument<string> | undefined;
}

const GameCard: React.FC<IProps> = ({ item }) => {
  return (
    <div className={css.wrap}>
      <PrismicNextImage field={item?.data.poster} className={css.image} />
      <div className={css.overlay}>
        <h3 className={css.title}>{item?.data.title}</h3>
        <PrismicRichText
          field={item?.data.description}
          components={{
            paragraph: ({ children }) => (
              <p className={css.description}>{children}</p>
            ),
          }}
        />
        <button type="button" className={css.bookingBtn}>
          BOOKING
        </button>
      </div>
    </div>
  );
};

export default GameCard;

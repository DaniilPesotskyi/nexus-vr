"use client";

import css from "./Slider.module.css";

import { useState } from "react";
import { GameDocument } from "@/../../prismicio-types";
import GameCard from "../GameCard/GameCard";

interface IProps {
  items: Array<GameDocument<string> | undefined>;
}

const Slider: React.FC<IProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <div>
        <ul className={css.list}>
          {items.map((item, index) => (
            <li key={index}>
              <GameCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;

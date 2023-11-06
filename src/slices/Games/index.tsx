import css from "./Games.module.css";

import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";
import Slider from "@/components/Slider/Slider";

export type GamesProps = SliceComponentProps<Content.GamesSlice>;

const Games = async ({ slice }: GamesProps): Promise<JSX.Element> => {
  const client = createClient();

  const games = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.game) && item.game.uid) {
        return client.getByUID("game", item.game.uid);
      }
    })
  );

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style="dark"
    >
      <Heading subtitle={slice.primary.subtitle} title={slice.primary.title} />

      {/* SLIDER */}
      <Slider items={games} />

      <button type="button" className={css.btn}>
        See all games
      </button>
    </Section>
  );
};

export default Games;

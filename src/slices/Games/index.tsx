import css from "./Games.module.css";

import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Heading from "@/components/Heading/Heading";
import Slider from "@/components/Slider/Slider";
import { PrismicNextLink } from "@prismicio/next";

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
    <section
      className={css.section}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <Heading
          subtitle={slice.primary.subtitle}
          title={slice.primary.title}
        />

        {/* SLIDER */}
        <Slider items={games} />
        <PrismicNextLink field={slice.primary.button_link} className={css.btn}>
          {slice.primary.button_text}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default Games;

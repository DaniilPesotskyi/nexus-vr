import css from "./Games.module.css";

import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";

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
      <div className={css.wrap}>
        <div className={css.slider}>
          <ul className={css.list}>
            {games.map((item, index) => (
              <li key={index}>
                <h3>{item?.data.title}</h3>
                <div className={css.overlay}>
                  <PrismicRichText field={item?.data.description} />
                  <div className={css.actions}>
                    <button type="button" className={css.bookingBtn}>
                      BOOKING
                    </button>
                    <button type="button" className={css.detailsBtn}>
                      Details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button type="button" className={css.btn}>
        See all games
      </button>
    </Section>
  );
};

export default Games;

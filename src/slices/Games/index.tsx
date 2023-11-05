import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Games`.
 */
export type GamesProps = SliceComponentProps<Content.GamesSlice>;

/**
 * Component for "Games" Slices.
 */
const Games = ({ slice }: GamesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for games (variation: {slice.variation}) Slices
    </section>
  );
};

export default Games;

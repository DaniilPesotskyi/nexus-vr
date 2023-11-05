import css from "./Hero.module.css";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Image from "next/image";

import HeroImg from "@/images/hero.png";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.container}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading1: ({ children }) => (
            <h1 className={css.heading}>{children}</h1>
          ),
        }}
      />
      <Image
        className={css.image}
        src={HeroImg.src}
        width={HeroImg.width}
        height={HeroImg.height}
        alt="vr player"
      ></Image>

      {/* <PrismicNextLink field={slice.items[0].link}>
        <PrismicNextImage field={slice.items[0].image} />
      </PrismicNextLink> */}

      <div className={css.subtitleWrap}>
        <PrismicRichText
          field={slice.primary.secondary_subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className={css.subtitle}>{children}</p>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.secondary_title}
          components={{
            heading2: ({ children }) => (
              <h2 className={css.title}>{children}</h2>
            ),
          }}
        />
      </div>

      <PrismicRichText
        field={slice.primary.body_text}
        components={{
          paragraph: ({ children }) => <p className={css.body}>{children}</p>,
        }}
      />

      <button type="button" className={css.btn}>
        I want to play
      </button>
    </section>
  );
};

export default Hero;

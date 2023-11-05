import css from "./Advantages.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";

export type AdvantagesProps = SliceComponentProps<Content.AdvantagesSlice>;

const Advantages = ({ slice }: AdvantagesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style="dark"
    >

      <Heading subtitle={slice.primary.subtitle} title={slice.primary.title} />

      <ul className={css.list}>
        {slice.items.map(({ icon, title, body }, index) => (
          <li key={index} className={css.item}>
            {icon === "Lock" && "Lock"}
            {icon === "Online" && "Online"}
            {icon === "Rotate" && "Rotate"}
            <div>
              <PrismicRichText
                field={title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className={css.itemTitle}>{children}</h3>
                  ),
                }}
              />
              <PrismicRichText
                field={body}
                components={{
                  paragraph: ({ children }) => (
                    <p className={css.itemBody}>{children}</p>
                  ),
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Advantages;

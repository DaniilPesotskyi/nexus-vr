import css from "./Rules.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section/Section";

export type RulesProps = SliceComponentProps<Content.RulesSlice>;

const Rules = ({ slice }: RulesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style="dark"
    >
      <Heading
        subtitle={slice.primary.subtitle}
        title={slice.primary.title}
        style="reverse"
      />

      <ul>
        {slice.items.map(({ icon, title, body }, index) => (
          <li key={index} className={css.item}>
            {icon === "Lock" && "Lock"}
            {icon === "Alcohol" && "Alcohol"}
            {icon === "Limit" && "Limit"}
            {icon === "Children" && "Children"}
            {icon === "Time" && "Time"}
            {icon === "Pregnant" && "Pregnant"}
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

export default Rules;

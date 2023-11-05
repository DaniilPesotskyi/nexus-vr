import css from "./Heading.module.css";

import clsx from "clsx";

import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

interface IProps {
  subtitle: RichTextField;
  title: RichTextField;
  style?: "normal" | "reverse";
  subtitleStyles?: string;
  titleStyles?: string;
}

const Heading: React.FC<IProps> = ({
  subtitle,
  title,
  subtitleStyles,
  titleStyles,
  style = "normal",
}) => {
  return (
    <div className={clsx(css.wrap, style === "reverse" && css.rev)}>
      <PrismicRichText
        field={subtitle}
        components={{
          paragraph: ({ children }) => (
            <p className={clsx(css.subtitle, subtitleStyles)}>{children}</p>
          ),
        }}
      />
      <PrismicRichText
        field={title}
        components={{
          heading2: ({ children }) => (
            <h2 className={clsx(css.title, titleStyles)}>{children}</h2>
          ),
        }}
      />
    </div>
  );
};

export default Heading;

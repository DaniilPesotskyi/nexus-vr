import css from "./Heading.module.css";

import cn from "classnames";

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
    <div className={cn(css.wrap, style === "reverse" && css.rev)}>
      <PrismicRichText
        field={subtitle}
        components={{
          paragraph: ({ children }) => (
            <p className={cn(css.subtitle, subtitleStyles)}>{children}</p>
          ),
        }}
      />
      <PrismicRichText
        field={title}
        components={{
          heading2: ({ children }) => (
            <h2 className={cn(css.title, titleStyles)}>{children}</h2>
          ),
        }}
      />
    </div>
  );
};

export default Heading;

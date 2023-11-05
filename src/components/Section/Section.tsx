import css from "./Section.module.css";

import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  className?: string;
  style?: "dark" | "light";
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({
  as: Comp = "section",
  className,
  style = "dark",
  children,
}) => {
  return (
    <Comp
      className={clsx(
        css.section,
        className,
        style === "dark" ? css.dark : css.light
      )}
    >
      <div className={css.container}>{children}</div>
    </Comp>
  );
};

export default Section;

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
            {icon === "Rotate" && <RotateIcon className={css.icon} />}
            {icon === "Online" && <OnlineIcon className={css.icon} />}
            {icon === "Lock" && <LockIcon className={css.icon} />}
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

function OnlineIcon({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.742 38.258a18.75 18.75 0 010-26.516m26.516 0a18.75 18.75 0 010 26.516m-20.625-5.893a10.417 10.417 0 010-14.73m14.734 0a10.417 10.417 0 010 14.73M27.083 25a2.083 2.083 0 11-4.166 0 2.083 2.083 0 014.166 0z"
      ></path>
    </svg>
  );
}

function LockIcon({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.5 20.833v-4.166c0-.709.058-1.407.173-2.084m24.827 6.25v-4.166a12.5 12.5 0 00-21.875-8.27m7.292 37.436h-6.25c-5.892 0-8.84 0-10.67-1.831-1.83-1.83-1.83-4.777-1.83-10.669 0-5.891 0-8.84 1.83-10.668 1.83-1.832 4.778-1.832 10.67-1.832h16.666c5.892 0 8.84 0 10.669 1.832 1.831 1.829 1.831 4.777 1.831 10.668 0 5.892 0 8.84-1.831 10.669-1.83 1.831-4.777 1.831-10.669 1.831H31.25"
      ></path>
    </svg>
  );
}

function RotateIcon({ className }: { className: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25 33.334h8.333v8.333"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M40.538 23.004c1.791-4.929 1.504-9.541-1.25-12.291-4.734-4.738-14.97-2.177-22.86 5.714C8.534 24.32 5.974 34.554 10.71 39.29c4.64 4.637 14.557 2.277 22.375-5.24"
      ></path>
    </svg>
  );
}

export default Advantages;

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

      <ul className={css.list}>
        {slice.items.map(({ icon, title, body }, index) => (
          <li key={index} className={css.item}>
            {icon === "Lock" && <LockIcon className={css.icon} />}
            {icon === "Alcohol" && <AlcoholIcon className={css.icon} />}
            {icon === "Limit" && <LimitIcon className={css.icon} />}
            {icon === "Children" && <ChildrenIcon className={css.icon} />}
            {icon === "Time" && <TimeIcon className={css.icon} />}
            {icon === "Pregnant" && <PregnantIcon className={css.icon} />}
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

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.5 20.833v-4.166c0-.709.058-1.407.173-2.084m24.827 6.25v-4.166a12.5 12.5 0 00-21.875-8.27m7.292 37.436h-6.25c-5.892 0-8.84 0-10.67-1.831-1.83-1.83-1.83-4.777-1.83-10.669 0-5.891 0-8.84 1.83-10.668 1.83-1.832 4.778-1.832 10.67-1.832h16.666c5.892 0 8.84 0 10.67 1.832 1.83 1.829 1.83 4.777 1.83 10.668 0 5.892 0 8.84-1.83 10.669-1.83 1.831-4.778 1.831-10.67 1.831H31.25"
      ></path>
    </svg>
  );
}

function AlcoholIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <g clipPath="url(#a)">
        <path d="M26.042 33.333v15.625h15.625m3.125-4.166V28.125l-3.75-5a12.5 12.5 0 01-2.5-7.5V1.042h-6.25v14.583a12.5 12.5 0 01-2.5 7.5l-2.709 3.61-.173.175m0 0L1.042 1.043M26.91 26.91l22.048 22.048m-38.541-8.333a7.291 7.291 0 01-7.071-9.092l1.862-7.575h10.417l1.863 7.575a7.293 7.293 0 01-7.071 9.092zm0 0v8.333m0 0h6.25m-6.25 0h-6.25"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h50v50H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function LimitIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <path d="M36.719 10.156a4.668 4.668 0 00-3.125 1.198v-2.76a4.688 4.688 0 00-9.362-.352 4.687 4.687 0 00-7.826 3.477v15.234l-2.197-3.527a4.688 4.688 0 10-8.129 4.672C12.586 41.82 16.05 46.094 25 46.094a16.424 16.424 0 0016.406-16.406V14.844a4.687 4.687 0 00-4.687-4.688zm3.125 19.532A14.861 14.861 0 0125 44.532c-7.283 0-10.467-2.249-17.521-17.131l-.03-.057a3.125 3.125 0 015.426-3.102l3.648 5.86a.78.78 0 001.446-.414V11.719a3.125 3.125 0 016.25 0v11.719a.78.78 0 101.562 0V8.594a3.125 3.125 0 016.25 0v14.844a.78.78 0 101.563 0v-8.594a3.125 3.125 0 016.25 0v14.844z"></path>
    </svg>
  );
}

function TimeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <path d="M25 5.469A19.531 19.531 0 1044.531 25 19.553 19.553 0 0025 5.469zm0 37.5A17.97 17.97 0 1142.969 25 17.988 17.988 0 0125 42.969zM36.719 25a.781.781 0 01-.782.781H25a.781.781 0 01-.781-.781V14.062a.781.781 0 111.562 0V24.22h10.157a.781.781 0 01.78.781z"></path>
    </svg>
  );
}

function PregnantIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <path d="M31.25 48.958C26.042 44.792 27.083 37.5 27.083 37.5l-13.541-2.083v-.521l2.798-5.317a20.943 20.943 0 002.41-9.754 6.283 6.283 0 016.283-6.283h3.092v6.25l1.137.285a6.75 6.75 0 015.113 6.546c0 2.354.59 4.667 1.717 6.733l1.408 2.582v.52L31.25 37.5M20.833 50c0-3.36.477-6.923 2.084-9.75m1.77-30.875s-3.333-2.083-3.333-4.687a3.642 3.642 0 017.284 0c0 2.604-3.326 4.687-3.326 4.687h-.625z"></path>
    </svg>
  );
}

function ChildrenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
    >
      <path d="M40.104 50v-7.64c0-2.385 1.633-4.32 3.646-4.32V25.077s-2.735-2.16-7.292-2.16c-4.558 0-7.291 2.16-7.291 2.16V38.04c2.014 0 3.645 1.935 3.645 4.323V50M18.75 50V36.458a4.167 4.167 0 014.167-4.166V15.625s-3.125-2.083-8.334-2.083c-5.208 0-8.333 2.083-8.333 2.083v16.667a4.167 4.167 0 014.167 4.166V50m25.777-31.25s-2.86-1.823-2.86-4.102c0-1.76 1.4-3.19 3.128-3.19 1.73 0 3.121 1.43 3.121 3.19 0 2.28-2.854 4.102-2.854 4.102h-.535zM14.27 9.375s-3.334-2.083-3.334-4.687a3.642 3.642 0 017.284 0c0 2.604-3.325 4.687-3.325 4.687h-.625z"></path>
    </svg>
  );
}

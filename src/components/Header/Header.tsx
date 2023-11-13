import css from "./Header.module.css";

import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Link from "next/link";

const Header: React.FC = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href={"/"}>{settings.data.site_title}</Link>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            {settings.data.navigation.map(({ label, link }) => (
              <li key={label}>
                <PrismicNextLink className={css.link} field={link}>
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className={css.menuBtn}>
          <MenuIcon />
        </button>
        <PrismicNextLink
          field={settings.data.button_link}
          className={css.bookingBtn}
        >
          {settings.data.button_text}
        </PrismicNextLink>
      </div>
    </header>
  );
};

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <g clipPath="url(#a)">
        <path d="M26.667 24.167H3.333a.833.833 0 110-1.667h23.334a.833.833 0 010 1.667zm0-8.334H3.333a.834.834 0 010-1.666h23.334a.834.834 0 010 1.666zm0-8.333H3.333a.833.833 0 010-1.667h23.334a.833.833 0 010 1.667z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h30v30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Header;

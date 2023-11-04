import css from "./Header.module.css";

import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Link from "next/link";

const Header: React.FC = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header>
      <div className={css.container}>
        <Link href={"/"}>{settings.data.site_title}</Link>
        <nav className={css.navigation}>
          <ul>
            {settings.data.navigation.map(({ label, link }) => (
              <li key={label}>
                <PrismicNextLink className={css.link} field={link}>
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className={css.bookingBtn} type="button">
          Booking
        </button>
      </div>
    </header>
  );
};

export default Header;

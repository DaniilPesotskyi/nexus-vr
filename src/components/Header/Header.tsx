import css from "./Header.module.css";

import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  const footer = await client.getSingle("footer");

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
        <MobileMenu
          navItems={settings.data.navigation}
          button={{
            label: settings.data.button_text,
            link: settings.data.button_link,
          }}
          contacts={footer.data.contacts}
          socials={footer.data.socials}
          copy={footer.data.copy}
        />
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

export default Header;

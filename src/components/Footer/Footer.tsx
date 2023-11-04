import css from "./Footer.module.css";

import Link from "next/link";

import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

const Footer: React.FC = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");
  const footer = await client.getSingle("footer");

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.top}>
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
        <div className={css.mid}>
          <ul>
            {footer.data.contacts.map(({ icon, value }) => (
              <li key={value}>
                {icon === "address" && "address"}
                {icon === "phone" && "phone"}
                {value}
              </li>
            ))}
          </ul>
          <ul>
            {footer.data.socials.map(({ icon, link }, index) => (
              <li key={index}>
                <PrismicNextLink field={link}>
                  {icon === "instagram" && "instagram"}
                  {icon === "facebook" && "facebook"}
                  {icon === "telegram" && "telegram"}
                  {icon === "youtube" && "youtube"}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.bot}></div>
      </div>
    </footer>
  );
};

export default Footer;

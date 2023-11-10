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
          <Link href={"/"} className={css.logo}>
            {settings.data.site_title}
          </Link>
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
            <MenuIcon className={css.icon} />
          </button>
          <button className={css.bookingBtn} type="button">
            Booking
          </button>
        </div>
        <div className={css.mid}>
          <ul className={css.contactsList}>
            {footer.data.contacts.map(({ icon, value }) => (
              <li key={value} className={css.contantItem}>
                {icon === "address" && (
                  <AddressIcon className={css.contactIcon} />
                )}
                {icon === "phone" && <PhoneIcon className={css.contactIcon} />}
                {value}
              </li>
            ))}
          </ul>
          <ul className={css.socialsList}>
            {footer.data.socials.map(({ icon, link }, index) => (
              <li key={index} className={css.socialsItem}>
                <PrismicNextLink field={link}>
                  {icon === "instagram" && <InstagramIcon />}
                  {icon === "facebook" && <FacebookIcon />}
                  {icon === "telegram" && <TelegramIcon />}
                  {icon === "youtube" && <YouTubeIcon />}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.bot}>
          <div className={css.copyContainer}>
            <p className={css.copyText}>2023. All Rights Reserved </p>
            <Link
              href={"https://github.com/DaniilPesotskyi"}
              className={css.copyText}
            >
              Development by Danya Pesotskyi
            </Link>
          </div>
          <Link
            href={"https://prismic.io/dashboard/login"}
            className={css.adminText}
          >
            Sign in as administrator
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path d="M3.943 11.85l2.984-1.338.008-.004a1.013 1.013 0 011.008.125l1.542 1.314c.976-.475 1.985-1.475 2.46-2.44l-1.317-1.564a1.014 1.014 0 01-.12-1.003v-.007l1.341-2.99a1.013 1.013 0 011.053-.602A3.563 3.563 0 0116 6.881C16 11.908 11.909 16 6.88 16a3.564 3.564 0 01-3.54-3.1 1.013 1.013 0 01.603-1.052zm2.937 3.137a8.115 8.115 0 008.107-8.107 2.547 2.547 0 00-2.209-2.533v.007l-1.33 2.977 1.31 1.567a1.013 1.013 0 01.1 1.043c-.575 1.174-1.757 2.347-2.944 2.92a1.014 1.014 0 01-1.044-.107L7.33 11.44l-2.976 1.333h-.007a2.547 2.547 0 002.533 2.214z"></path>
    </svg>
  );
}

function AddressIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path d="M10 5.417a2.083 2.083 0 110 4.166 2.083 2.083 0 010-4.167zm0-3.75A5.833 5.833 0 0115.833 7.5c0 4.375-5.833 10.833-5.833 10.833S4.167 11.875 4.167 7.5A5.833 5.833 0 0110 1.667zm0 1.666A4.167 4.167 0 005.833 7.5c0 .833 0 2.5 4.167 8.091C14.167 10 14.167 8.334 14.167 7.5A4.167 4.167 0 0010 3.333z"></path>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#fff" rx="20"></rect>
      <path
        fillRule="evenodd"
        d="M11.262 27.057a2.568 2.568 0 01-1.043-.602 2.487 2.487 0 01-.642-1.004c-.734-1.964-.952-10.164.462-11.783a2.742 2.742 0 011.849-.902c3.792-.398 15.51-.345 16.855.133.379.12.725.321 1.012.59.287.269.508.598.646.962.802 2.03.83 9.408-.108 11.358a2.538 2.538 0 01-1.183 1.168c-1.413.69-15.972.677-17.848.08zm6.022-3.848l6.797-3.45-6.797-3.477v6.927z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#fff" rx="20"></rect>
      <path d="M28 12.602l-3.005 15.69s-.42 1.088-1.576.566l-6.934-5.505-.033-.017c.937-.87 8.2-7.633 8.518-7.94.491-.475.186-.757-.384-.399l-10.73 7.056-4.138-1.442s-.652-.24-.714-.762c-.064-.523.735-.805.735-.805l16.874-6.855S28 11.558 28 12.602z"></path>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#fff" rx="20"></rect>
      <path d="M21.657 20.365h3.722l.585-3.804h-4.308v-2.08c0-1.58.514-2.981 1.983-2.981H26V8.18c-.415-.057-1.292-.18-2.95-.18-3.462 0-5.491 1.84-5.491 6.03v2.53H14v3.805h3.559V30.82a14.33 14.33 0 002.151.18c.662 0 1.309-.06 1.947-.148V20.365z"></path>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#fff" rx="20"></rect>
      <path d="M20 11.807h4.096c.964 0 1.446.241 1.808.362.482.24.843.361 1.204.723.362.361.603.723.723 1.204.12.362.241.844.362 1.808v8.192c0 .964-.241 1.446-.362 1.808-.24.482-.361.843-.723 1.204-.361.362-.723.603-1.204.723-.362.12-.844.241-1.808.362h-8.192c-.964 0-1.446-.241-1.808-.362-.482-.24-.843-.361-1.204-.723-.362-.361-.603-.723-.723-1.204-.12-.362-.241-.844-.362-1.808v-8.192c0-.964.241-1.446.362-1.808.24-.482.361-.843.723-1.204.361-.362.723-.603 1.204-.723.362-.12.844-.241 1.808-.362H20zM20 10h-4.096c-1.085 0-1.808.241-2.41.482a5.263 5.263 0 00-1.807 1.205c-.603.602-.844 1.084-1.205 1.807-.241.602-.361 1.325-.482 2.41v8.192c0 1.085.241 1.808.482 2.41a5.263 5.263 0 001.205 1.807c.602.603 1.084.844 1.807 1.205.602.241 1.325.361 2.41.482h8.192c1.085 0 1.808-.241 2.41-.482a5.263 5.263 0 001.807-1.205c.603-.602.844-1.084 1.205-1.807.241-.602.361-1.325.482-2.41v-8.192c0-1.085-.241-1.808-.482-2.41a5.263 5.263 0 00-1.205-1.807c-.602-.603-1.084-.844-1.807-1.205-.602-.241-1.325-.361-2.41-.482H20z"></path>
      <path d="M20 14.82A5.142 5.142 0 0014.82 20c0 2.892 2.288 5.18 5.18 5.18s5.18-2.288 5.18-5.18-2.288-5.18-5.18-5.18zm0 8.553A3.368 3.368 0 0116.627 20 3.368 3.368 0 0120 16.627 3.368 3.368 0 0123.373 20c0 1.807-1.566 3.373-3.373 3.373zm5.301-7.469a1.205 1.205 0 100-2.41 1.205 1.205 0 000 2.41z"></path>
    </svg>
  );
}

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

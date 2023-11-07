import "./globals.css";

import { Roboto, Epilogue } from "next/font/google";

import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import cn from "classnames";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Nexus",
    description:
      settings.data.meta_description ||
      "Experience immersive virtual reality sessions with Nexus. Book VR adventures. Fun for all ages",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, epilogue.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

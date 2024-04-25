import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";

const PPEditorialNew = localFont({
  variable: "--pp_editorial_new",
  src: [
    {
      path: "./assets/fonts/PPEditorialNew-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./assets/fonts/PPEditorialNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/PPEditorialNew-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

const PPNeueMontreal = localFont({
  variable: "--pp_neue_montreal",
  src: [
    {
      path: "./assets/fonts/PPNeueMontreal-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./assets/fonts/PPNeueMontreal-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/PPNeueMontreal-Medium.woff2",
      weight: "530",
      style: "normal",
    },
    {
      path: "./assets/fonts/PPNeueMontreal-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Jean-Michel Melki",
  description: "",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/icon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/icon-180.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${PPEditorialNew.variable} ${PPNeueMontreal.variable}`}
    >
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

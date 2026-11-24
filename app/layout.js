import { Anton, Geist, Geist_Mono } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--nf-display", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--nf-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap" });

export const metadata = {
  title: "Jonathan Okwudili — Front-end Developer",
  description: "Portfolio of Jonathan Okwudili, front-end developer.",
};

// Colours the phone's browser bar to match the page in light and dark mode.
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2e9" },
    { media: "(prefers-color-scheme: dark)", color: "#121210" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

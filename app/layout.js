import { Anton, Geist, Geist_Mono } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "lenis/dist/lenis.css";
import "./globals.css";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--nf-display", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--nf-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap" });

export const metadata = {
  title: "Jonathan Okwudili — Front-end Developer",
  description: "Portfolio of Jonathan Okwudili, front-end developer open to full-time roles and freelance projects.",
};

// Colours the phone's browser bar to match the page.
export const viewport = {
  themeColor: "#f3f2e9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

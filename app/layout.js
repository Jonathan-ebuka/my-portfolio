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

// Applies the saved theme before the page paints, so dark mode doesn't flash.
const themeScript = `try{if(localStorage.getItem('selected-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

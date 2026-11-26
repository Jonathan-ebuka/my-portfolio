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

// Every load or refresh starts at the top: stop the browser restoring the old
// scroll position, and drop any "#section" left in the address by a link.
const startAtTop = `try{history.scrollRestoration="manual";if(location.hash)history.replaceState(null,"",location.pathname+location.search);window.scrollTo(0,0)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: startAtTop }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

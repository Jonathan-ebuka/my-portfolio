import { Bai_Jamjuree } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  display: "swap",
});

export const metadata = {
  title: "Jonathan's Portfolio",
  description: "Portfolio of Jonathan Okwudili, front-end developer.",
};

// Applies the saved theme before the page paints, so dark mode doesn't flash.
const themeScript = `try{if(localStorage.getItem('selected-theme')==='dark')document.body.classList.add('dark-theme')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={baiJamjuree.variable}>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}

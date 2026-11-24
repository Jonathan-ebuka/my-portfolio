import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Page() {
  return (
    <>
      <Marquee />
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

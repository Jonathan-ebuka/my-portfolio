import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ScrollRevealInit />
    </>
  );
}

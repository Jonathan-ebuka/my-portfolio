import Image from "next/image";
import homeImg from "@/assets/img/home.jpg";
import curvedArrow from "@/assets/img/curved-arrow.svg";
import randomLines from "@/assets/img/random-lines.svg";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name reveal-left">Jonathan Okwudili</h1>

        <div className="home__perfil reveal-right">
          <div className="home__image">
            <Image src={homeImg} alt="Jonathan Okwudili" className="home__img" priority />
            <div className="home__shadow"></div>

            <Image src={curvedArrow} alt="" className="home__arrow" />
            <Image src={randomLines} alt="" className="home__line" />

            <div className="geometric-box"></div>
          </div>

          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/jonathanokwudiliebuka/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>

            <a
              href="https://github.com/Jonathan-ebuka"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>

        <div className="home__info reveal-left">
          <p className="home__description">
            <b>Front-end developer</b> , With knoledge in web development, I offer the best
            projects resulting in quality work.
          </p>

          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <span className="home__scroll-text">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  );
}

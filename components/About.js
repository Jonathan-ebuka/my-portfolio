import Image from "next/image";
import aboutImg from "@/assets/img/about.jpg";
import randomLines from "@/assets/img/random-lines.svg";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About me.</span>
        </h2>

        <div className="about__perfil reveal-right">
          <div className="about__image">
            <Image src={aboutImg} alt="Jonathan Okwudili" className="about__img" />
          </div>

          <div className="about__shadow"></div>
          <div className="geometric-box"></div>
          <Image src={randomLines} alt="" className="about__line" />
          <div className="about__box"></div>
        </div>

        <div className="about__info reveal-left">
          <p className="about__description">
            Passionate about creating <b>Web Pages</b>,I have no official working experience, but
            i&apos;ve built some website with the help of youtube, stack overflow and other online
            resources to learn more about coding.
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>My Skills Are:</b> HTML, CSS, JavaScript, Tailwind css, Git &amp; GitHub, React JS
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line"></i>Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/jonathanokwudiliebuka/"
              target="_blank"
              rel="noopener noreferrer"
              className="button__ghost"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

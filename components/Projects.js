import Image from "next/image";
import project1 from "@/assets/img/project-1.jpg";
import project2 from "@/assets/img/project-2.png";
import project3 from "@/assets/img/project-3.png";

// To add a project, add an entry here.
const projects = [
  {
    image: project1,
    title: "Blog Website",
    subtitle: "Website",
    live: "https://blog-site-six-mu.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/blog-site",
  },
  {
    image: project2,
    title: "E-commerce Website",
    subtitle: "Website",
    live: "https://e-commerce-website-main-nine.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/E-Commerce-Website-main",
  },
  {
    image: project3,
    title: "Data Service Website",
    subtitle: "Website",
    live: "https://react-data-website-starter.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/react-data-website-starter",
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1 reveal-bottom">
        <span>Projects.</span>
      </h2>

      <div className="projects__container container grid">
        {projects.map(({ image, title, subtitle, live, repo }) => (
          <article className="projects__card reveal-top" key={title}>
            <div className="projects__image">
              <Image
                src={image}
                alt={title}
                className="projects__img"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button button"
                aria-label={`Open ${title}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">{subtitle}</h3>
              <h2 className="projects__title">{title}</h2>
            </div>

            <div className="projects__buttons">
              <a href={repo} target="_blank" rel="noopener noreferrer" className="projects__link">
                <i className="ri-git-branch-line"></i> View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

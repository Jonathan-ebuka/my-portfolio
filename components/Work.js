import Image from "next/image";
import project1 from "@/assets/img/project-1.jpg";
import project2 from "@/assets/img/project-2.png";
import project3 from "@/assets/img/project-3.png";

// To add a project, add an entry here.
const projects = [
  {
    image: project1,
    title: "Blog Website",
    note: "a blog site for reading and writing posts.",
    live: "https://blog-site-six-mu.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/blog-site",
  },
  {
    image: project2,
    title: "E-commerce Website",
    note: "an online store with product listings.",
    live: "https://e-commerce-website-main-nine.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/E-Commerce-Website-main",
  },
  {
    image: project3,
    title: "Data Service Website",
    note: "a landing page for a data service, built in React.",
    live: "https://react-data-website-starter.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/react-data-website-starter",
  },
];

export default function Work() {
  return (
    <section className="work section" id="work">
      <h2 className="big-title" data-reveal>
        Work I&apos;m <br />
        proud of<span className="accent">.</span>
      </h2>

      <div className="work__pile">
        {projects.map((p, i) => (
          <article className="card" key={p.title} style={{ "--n": i }} data-reveal>
            <div className="card__head">
              <span className="card__num">0{i + 1}</span>
              <p className="card__note">{p.note}</p>
              <div className="card__links">
                <a href={p.live} target="_blank" rel="noopener noreferrer">[ Live ]</a>
                <a href={p.repo} target="_blank" rel="noopener noreferrer">[ Code ]</a>
              </div>
            </div>
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="card__shot">
              <Image src={p.image} alt={`${p.title} screenshot`} sizes="(max-width: 900px) 90vw, 40vw" />
            </a>
            <h3 className="card__title">{p.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import peniel from "@/assets/img/project-peniel.jpg";
import fidelity from "@/assets/img/project-fidelity.jpg";
import slyko from "@/assets/img/project-slyko.jpg";

// To add a project, add an entry here.
const projects = [
  {
    image: peniel,
    title: "Peniel Makambo",
    note: "a portfolio site for a fashion stylist based in Ireland.",
    live: "https://peniel-r21a.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/peniel",
  },
  {
    image: fidelity,
    title: "Fidelity Banking",
    note: "an online banking app with transfers, bill pay and cards.",
    live: "https://bankin-gilt.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/bankin",
  },
  {
    image: slyko,
    title: "Slyko Living",
    note: "an online furniture store with a shop and cart.",
    live: "https://slyko-living.vercel.app/",
    repo: "https://github.com/Jonathan-ebuka/my-bank-app",
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

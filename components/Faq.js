const faqs = [
  {
    q: "What do you do?",
    a: "Custom web development tailored to your specifications, designed to provide a flawless user experience.",
  },
  {
    q: "What do you build with?",
    a: "On the front end: HTML, CSS & Tailwind CSS, JavaScript & TypeScript, React & Next.js, with Git, GitHub and GitLab. Plus a sprinkle of backend: Node.js, MongoDB, Supabase and Firebase.",
  },
  {
    q: "Where did you learn?",
    a: "YouTube, Stack Overflow, other online resources, and a lot of building things myself.",
  },
  {
    q: "How do I reach you?",
    a: "Send a message with the form below, or find me on LinkedIn. I read every message.",
  },
];

export default function Faq() {
  return (
    <section className="faq section" id="faq">
      <h2 className="big-title" data-reveal>
        Before you ask...
      </h2>

      <ol className="faq__grid">
        {faqs.map(({ q, a }, i) => (
          <li key={q} data-reveal>
            <span className="faq__num">0{i + 1}</span>
            <h3>{q}</h3>
            <p>{a}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

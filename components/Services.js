const services = [
  {
    icon: "ri-code-box-line",
    title: "Development",
    description:
      "Custom web development tailored to your specifications, designed to provide a flawless user experience.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title-2 reveal-bottom">
        <span>Services.</span>
      </h2>

      <div className="services__container reveal-top container grid">
        {services.map(({ icon, title, description }) => (
          <article className="services__card" key={title}>
            <div className="services__border"></div>
            <div className="services__content">
              <div className="services__icon">
                <div className="services__box"></div>
                <i className={icon}></i>
              </div>
              <h2 className="services__title">{title}</h2>
              <p className="services__description">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

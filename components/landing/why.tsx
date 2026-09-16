import Reveal from "./reveal";

const cards = [
  {
    num: "01",
    col: "why-1",
    title: "Human + Technology",
    text: "We combine skilled human workers with software and automation.",
  },
  {
    num: "02",
    col: "why-2",
    title: "Scalable Workforce",
    text: "Build project-specific teams without maintaining a permanent workforce.",
  },
  {
    num: "03",
    col: "why-3",
    title: "Quality Focused",
    text: "Structured guidelines, training, review, and quality-control processes.",
  },
  {
    num: "04",
    col: "why-4",
    title: "Multiple Capabilities",
    text: "From data collection and annotation to software and automation.",
  },
  {
    num: "05",
    col: "why-5",
    title: "Flexible Engagement",
    text: "Work with us on a project, ongoing contract, or scalable operational requirement.",
  },
];

export default function Why() {
  return (
    <div id="why" className="why-section">
      <Reveal className="section-head">
        <span className="eyebrow">08 — Why Work With Us</span>
        <h2 className="section-title">
          Flexible by Design. <span className="hl">Reliable by Process.</span>
        </h2>
      </Reveal>

      <Reveal className="why-bento">
        {cards.map((card) => (
          <article className={`why-card ${card.col}`} key={card.num}>
            <span className="cap-num">{card.num}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
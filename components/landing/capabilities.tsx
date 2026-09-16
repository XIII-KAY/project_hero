import Reveal from "./reveal";

const cards = [
  {
    num: "01",
    col: "cap-1",
    title: "AI Data Operations",
    text: "Data annotation, labeling, LLM evaluation, linguistic QA, and dataset validation.",
    tags: ["Annotation", "LLM Eval", "Linguistic QA"],
  },
  {
    num: "02",
    col: "cap-2",
    title: "Research & Surveys",
    text: "Consumer surveys, market research fieldwork, respondent recruitment, and survey operations.",
    tags: [],
  },
  {
    num: "03",
    col: "cap-3",
    title: "Remote Workforce",
    text: "Recruitment, screening, onboarding, training, quality control, and distributed workforce management.",
    tags: [],
  },
  {
    num: "04",
    col: "cap-4",
    title: "Transcription & Speech",
    text: "Audio transcription, ASR correction, speaker labeling, timestamping, and speech-data preparation.",
    tags: [],
  },
  {
    num: "05",
    col: "cap-5",
    title: "Software Development",
    text: "Websites, WordPress, WooCommerce, web applications, APIs, and custom digital solutions.",
    tags: [],
  },
  {
    num: "06",
    col: "cap-6",
    title: "Automation & Data Processing",
    text: "Python, Selenium, browser automation, data processing, and business workflow automation.",
    tags: [],
  },
];

export default function Capabilities() {
  return (
    <div id="capabilities" className="capabilities-section">
      <Reveal className="section-head">
        <span className="eyebrow">01 — Trusted Capabilities</span>
        <h2 className="section-title">
          From Data Collection <span className="hl">to Delivery.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="section-intro">
          Whether you need thousands of data points collected, AI training data prepared,
          surveys completed, or business workflows automated, we provide the people, processes,
          and technology to get it done.
        </p>
      </Reveal>

      <Reveal className="bento-grid">
        {cards.map((card) => (
          <article className={`cap-card ${card.col}`} key={card.num}>
            <span className="cap-num">{card.num}</span>
            <div className="cap-body">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.tags.map((tag) => (
                <span className="cap-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
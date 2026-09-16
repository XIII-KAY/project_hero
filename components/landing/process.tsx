import Reveal from "./reveal";

const steps = [
  {
    num: "01",
    title: "Understand",
    text: "We understand your requirements, data, volume, timeline, and quality expectations.",
  },
  {
    num: "02",
    title: "Plan",
    text: "We design the appropriate workforce, workflow, tools, and quality-control process.",
  },
  {
    num: "03",
    title: "Execute",
    text: "Our team performs the work using documented processes and project-specific guidelines.",
  },
  {
    num: "04",
    title: "Review",
    text: "Data and outputs go through quality checks before delivery.",
  },
  {
    num: "05",
    title: "Scale",
    text: "Once the process works, we scale the workforce and infrastructure according to your requirements.",
  },
];

export default function Process() {
  return (
    <div id="process" className="process">
      <Reveal className="section-head">
        <span className="eyebrow">07 — How We Work</span>
        <h2 className="section-title">
          Simple Process. <span className="hl">Structured Execution.</span>
        </h2>
      </Reveal>

      <div className="process-steps">
        {steps.map((step, i) => (
          <Reveal as="div" delay={i * 0.05} key={step.num}>
            <div className="pstep">
              <span className="pnum">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
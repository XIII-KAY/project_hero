import Reveal from "./reveal";
import Nav from "./nav";
import { mailto, SITE } from "@/lib/site";

const services = [
  {
    num: "01",
    title: "AI Data & Annotation",
    sub: "Training data · LLM eval · QA",
    chips: ["AI Data Collection", "Data Annotation", "NLP Annotation", "LLM Response Evaluation", "RLHF Data", "Dataset QA"],
    subject: "AI Data & Annotation",
  },
  {
    num: "02",
    title: "Transcription & Speech",
    sub: "Audio · ASR · multilingual",
    chips: ["Audio Transcription", "Hindi / English", "ASR Correction", "Speaker Diarization", "Speech Dataset Prep", "Voice Annotation"],
    subject: "Transcription & Speech",
  },
  {
    num: "03",
    title: "Survey & Market Research",
    sub: "Recruitment · fieldwork · QC",
    chips: ["Consumer Survey Recruitment", "Market Research Fieldwork", "Survey Quality Control", "Data Validation", "Participant Screening", "Workforce Management"],
    subject: "Survey & Market Research",
  },
  {
    num: "04",
    title: "Remote Workforce Ops",
    sub: "Recruitment · onboarding · coordination",
    chips: ["Freelancer Recruitment", "Candidate Screening", "Onboarding & Training", "Performance Tracking", "SOP Development", "High-Volume Hiring"],
    subject: "Remote Workforce Ops",
  },
  {
    num: "05",
    title: "Software & Web Dev",
    sub: "WordPress · full stack · frontend",
    chips: ["WordPress / WooCommerce", "Next.js & React", "Responsive Development", "API Integration", "Headless CMS", "JavaScript / TypeScript"],
    subject: "Software & Web Dev",
  },
  {
    num: "06",
    title: "Automation & Tech Solutions",
    sub: "Python · Selenium · workflows",
    chips: ["Workflow Automation", "Browser Automation", "Data Extraction", "Python / pandas", "Reporting Automation", "Recruitment Automation"],
    subject: "Automation & Tech Solutions",
  },
  {
    num: "07",
    title: "AI & Data Specialist",
    sub: "LLM · annotation · QA",
    chips: ["LLM Evaluation", "Prompt / Response Eval", "Data Labeling", "Linguistic QA", "Transcription", "ASR Correction"],
    subject: "AI & Data Specialist",
  },
  {
    num: "08",
    title: "Research & Data Services",
    sub: "Collection · cleaning · QC",
    chips: ["Market Research Support", "Data Collection", "Data Verification", "Data Cleaning", "Dataset Preparation", "Research Ops Support"],
    subject: "Research & Data Services",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header banner */}
      <div className="services-header">
        <div className="services-blobs" aria-hidden="true">
          <div className="blob blob-a" />
          <div className="blob blob-c" />
        </div>

        <Nav />

        <div className="services-head-content">
          <Reveal as="span">
            <span className="eyebrow">Services</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="services-title">
              Our <span className="hl">Services.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              AI data operations · research · remote workforce · software development ·
              automation — delivered as agency capabilities or individual expertise.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Card grid */}
      <div className="pad">
        <div className="services-grid">
          {services.map((svc) => (
            <Reveal as="article" key={svc.num} className="svc">
              <span className="svc-num">{svc.num}</span>
              <span className="cat-label">Domain of this Project</span>
              <h3>{svc.title}</h3>
              <div className="sub">{svc.sub}</div>
              <ul className="chips">
                {svc.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
              <div className="svc-btn">
                <a href={mailto(svc.subject)} className="btn btn-ink">
                  Start a Project
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact block */}
        <Reveal className="contact-block">
          <div className="cb-label">Interested in working together?</div>
          <a
            href={mailto(
              "Interested in your services",
              "Hello,\n\nI came across your services and I'm interested in learning more about...\n\nPlease let me know when you're available to chat.\n\nThank you.",
            )}
          >
            {SITE.email}
          </a>
          <span className="contact-hint">(email pre-filled with &ldquo;Interested in...&rdquo;)</span>
        </Reveal>
      </div>
    </>
  );
}
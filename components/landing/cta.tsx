import Reveal from "./reveal";
import { mailto } from "@/lib/site";

export default function Cta() {
  return (
    <div id="contact" className="cta">
      <div className="cta-blobs" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
      </div>

      <div className="cta-inner">
        <Reveal as="span">
          <span className="eyebrow">09 — Start</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="cta-headline">
            Have a Project <span className="hl">in Mind?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="cta-text">
            Tell us what you&apos;re trying to build, collect, automate, or scale.
            We&apos;ll help you determine the right people, process, and technology for the job.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="cta-actions">
            <a href={mailto("Project Inquiry")} className="btn btn-primary">
              Start a Conversation
            </a>
            <a href={mailto("Project Quote Request")} className="btn btn-secondary">
              Request a Project Quote
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
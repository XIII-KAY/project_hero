"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./reveal";
import Nav from "./nav";
import { useContactModal } from "./contact-modal-context";

const heroIndex = [
  { num: "01", label: "AI Data" },
  { num: "02", label: "Research" },
  { num: "03", label: "Workforce" },
  { num: "04", label: "Automation" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });
  const { openModal } = useContactModal();

  function handleMove(e: React.MouseEvent) {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setGlow({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
  }

  return (
    <section
      ref={sectionRef}
      className="hero"
      onMouseMove={handleMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, visible: false }))}
    >
      <div className="hero-blobs" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
      </div>
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{ left: glow.x, top: glow.y, opacity: glow.visible ? 1 : 0 }}
      />

      <Nav />

      <div className="hero-content">
        <Reveal as="span">
          <span className="eyebrow hero-eyebrow">AI Data · Research · Remote Workforce · Technology</span>
        </Reveal>

        <Reveal as="h1" delay={0.08} className="hero-headline">
          <span>People, Data &amp; Technology.</span>
          <span className="hl">Built to Scale.</span>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="hero-description">
            We help businesses collect, process, validate, and operationalize data through
            AI data services, research operations, remote workforces, and technology solutions.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-description">
            From large-scale data annotation and survey projects to custom software and workflow
            automation, we combine skilled people with practical technology to deliver reliable,
            scalable operations.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="hero-cta">
            <button type="button" onClick={() => openModal()} className="btn btn-primary">
              Start a Project
            </button>
            <Link href="/#capabilities" className="btn btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.36} className="hero-index">
        {heroIndex.map((item) => (
          <div className="idx" key={item.num}>
            <span>{item.num}</span>
            {item.label}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
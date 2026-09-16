import Reveal from "./reveal";
import { mailto } from "@/lib/site";
import type { DetailBlock } from "@/lib/content";

export default function DetailSection({ block }: { block: DetailBlock }) {
  return (
    <div id={block.id} className="detail">
      <Reveal as="div" className="detail-head">
        <span className="eyebrow">{block.eyebrow}</span>
        <h2 className="detail-title">
          {block.title} <span className="hl">{block.hl}</span>
        </h2>
        <p className="detail-subtitle">{block.subtitle}</p>
      </Reveal>

      <Reveal as="div" delay={0.1} className="detail-body">
        {block.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {block.extraParagraph && <p>{block.extraParagraph}</p>}

        {block.workItems && (
          <>
            {block.lead && <p className="lead">{block.lead}</p>}
            <div className="work-grid">
              {block.workItems.map((item) => (
                <div className="work-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {block.chips && (
          <>
            {block.lead && <p className="lead">{block.lead}</p>}
            {block.chips.length > 1 ? (
              <div className="tech-cols">
                {block.chips.map((col) =>
                  col.heading ? (
                    <div className="tech-col" key={col.heading}>
                      <h4>{col.heading}</h4>
                      <ul className="chips">
                        {col.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="tech-col" key={col.items[0]}>
                      <ul className="chips">
                        {col.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <ul className="chips">
                {block.chips[0].items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {block.link && (
          <a href={mailto(block.link.subject)} className="detail-link">
            {block.link.label}
          </a>
        )}
      </Reveal>
    </div>
  );
}
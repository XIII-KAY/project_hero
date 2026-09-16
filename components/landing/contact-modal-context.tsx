"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ModalPrefill = { projectType?: string };
type Ctx = { openModal: (prefill?: ModalPrefill) => void };

const ContactModalCtx = createContext<Ctx>({ openModal: () => {} });
export const useContactModal = () => useContext(ContactModalCtx);

const projectTypes = [
  { value: "ai-data", label: "AI Data & Annotation" },
  { value: "research", label: "Survey & Market Research" },
  { value: "workforce", label: "Remote Workforce" },
  { value: "transcription", label: "Transcription & Speech" },
  { value: "software", label: "Software & Web Dev" },
  { value: "automation", label: "Automation & Tech Solutions" },
  { value: "other", label: "Other" },
];

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<ModalPrefill>({});
  const [formVersion, setFormVersion] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback((p?: ModalPrefill) => {
    setPrefill(p ?? {});
    setFormVersion((v) => v + 1);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen && !el.open) el.showModal();
    else if (!isOpen && el.open) el.close();
  }, [isOpen]);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalCtx.Provider value={{ openModal }}>
      {children}
      <dialog ref={dialogRef} className="contact-modal" onClose={handleClose}>
        <button
          onClick={handleClose}
          className="modal-close"
          type="button"
          aria-label="Close"
        >
          ✕
        </button>
        <h2>Start a Project</h2>
        <p>
          Tell us about your project and we&apos;ll get back to you shortly.
        </p>
        <form
          key={formVersion}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="modal-field">
            Name
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
          <label className="modal-field">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
            />
          </label>
          <label className="modal-field">
            Project Type
            <select
              name="projectType"
              defaultValue={prefill.projectType ?? ""}
            >
              <option value="">Select a service...</option>
              {projectTypes.map((pt) => (
                <option key={pt.value} value={pt.value}>
                  {pt.label}
                </option>
              ))}
            </select>
          </label>
          <label className="modal-field">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project, timeline, and requirements..."
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary modal-submit"
            disabled
          >
            Send Message
          </button>
          <span className="modal-note">
            Backend integration coming soon.
          </span>
        </form>
      </dialog>
    </ContactModalCtx.Provider>
  );
}
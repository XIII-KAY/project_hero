export type DetailBlock = {
  id: string;
  formType: string;
  eyebrow: string;
  title: string;
  hl: string;
  subtitle: string;
  paragraphs: string[];
  extraParagraph?: string;
  lead?: string;
  chips?: Array<{ heading?: string; items: string[] }>;
  link?: { label: string; subject: string };
};

export const detailBlocks: DetailBlock[] = [
  {
    id: "ai-data",
    formType: "ai-data",
    eyebrow: "02 — Domain of this Project",
    title: "AI Data",
    hl: "Operations",
    subtitle: "Human Expertise for Better AI",
    paragraphs: [
      "AI systems are only as good as the data behind them.",
      "We provide human-powered data services that help organizations build, evaluate, and improve AI systems.",
    ],
    lead: "Our capabilities include:",
    chips: [
      {
        items: [
          "Data annotation & labeling",
          "Text and NLP annotation",
          "LLM response evaluation",
          "Prompt and response assessment",
          "Intent classification",
          "Linguistic quality assurance",
          "AI response quality review",
          "Dataset validation",
          "Human feedback",
          "Multilingual data operations",
        ],
      },
    ],
    link: {
      label: "Talk to Us About Your AI Data Project →",
      subject: "AI Data Project Inquiry",
    },
  },
  {
    id: "research",
    formType: "research",
    eyebrow: "03 — Domain of this Project",
    title: "Research &",
    hl: "Survey Ops",
    subtitle: "Reliable Data From Real People",
    paragraphs: [
      "We support market research and consumer research projects with structured recruitment and survey operations.",
    ],
    lead: "Our teams can support:",
    chips: [
      {
        items: [
          "Consumer survey recruitment",
          "Online survey completion",
          "Market research fieldwork",
          "Regional data collection",
          "Respondent screening",
          "Survey quality control",
          "Data validation",
          "High-volume survey operations",
        ],
      },
    ],
    extraParagraph: "From recruitment to completion, we build processes designed around quality, consistency, and scale.",
    link: {
      label: "Discuss Your Research Project →",
      subject: "Research Project Inquiry",
    },
  },
  {
    id: "workforce",
    formType: "workforce",
    eyebrow: "04 — Domain of this Project",
    title: "Remote",
    hl: "Workforce",
    subtitle: "Build a Workforce Without Building the Infrastructure",
    paragraphs: [
      "Need a distributed team for a project?",
      "We handle the operational layer — from finding suitable workers to onboarding, training, communication, quality control, and project coordination.",
    ],
    lead: "We can support:",
    chips: [
      {
        items: [
          "Recruitment & screening",
          "Onboarding & training",
          "Workforce management",
          "Quality control",
          "Process management & SOPs",
        ],
      },
    ],
  },
  {
    id: "transcription",
    formType: "transcription",
    eyebrow: "05 — Domain of this Project",
    title: "Transcription",
    hl: "& Speech",
    subtitle: "Turn Audio Into Usable Data",
    paragraphs: [
      "We support speech and language-data projects requiring accurate human transcription and review.",
    ],
    lead: "Services include:",
    chips: [
      {
        items: [
          "Audio transcription",
          "Hindi & English transcription",
          "Bilingual transcription",
          "ASR transcript correction",
          "Speaker labeling",
          "Timestamping",
          "Audio quality review",
          "Speech dataset preparation",
          "Linguistic QA",
        ],
      },
    ],
    link: {
      label: "Discuss Transcript Projects →",
      subject: "Transcription Project Inquiry",
    },
  },
  {
    id: "technology",
    formType: "automation",
    eyebrow: "06 — Domain of this Project",
    title: "Technology",
    hl: "& Automation",
    subtitle: "Technology That Makes Operations Easier",
    paragraphs: [
      "Our development background allows us to go beyond manual operations.",
      "We build websites, internal tools, integrations, and automation that reduce repetitive work and improve operational efficiency.",
    ],
    chips: [
      {
        heading: "Development",
        items: [
          "WordPress",
          "WooCommerce",
          "JavaScript",
          "Next.js",
          "HTML / CSS",
          "REST APIs",
          "Headless CMS",
          "Custom web applications",
        ],
      },
      {
        heading: "Automation",
        items: [
          "Python",
          "Selenium",
          "Browser automation",
          "Data processing",
          "Workflow automation",
          "Custom scripts",
          "Spreadsheet and reporting automation",
        ],
      },
    ],
    link: {
      label: "Build Something With Us →",
      subject: "Technology Project Inquiry",
    },
  },
];
// ═════════════════════════════════════════════════════════════
// YOUR WEBSITE CONTENT — this is the only file you need to edit.
//
// • Change text between the "quotes". Keep the commas at line ends.
// • Lists are in [ square brackets ]. To add an item, copy an
//   existing one (including its comma) and change the words.
// • Save, commit on GitHub, and the site updates in about a minute.
// ═════════════════════════════════════════════════════════════

// ── 1. Who you are ───────────────────────────────────────────
export const person = {
  name: "Sanjay Gupta",
  title: "Senior Programme Manager, Transformation & Portfolio Governance",
  headline: "Transformation programmes for global markets, grounded in how trades actually settle.",
  location: "Bengaluru, India",
  availability: "Open to senior programme and transformation roles, including contract and interim. Happy to relocate.",

  email: "sanjayg1007subs@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjaygupta-vp",

  // Your phone number is NOT shown publicly unless you set showPhone to true.
  phone: "+91-9967654159",
  showPhone: false,

  // To offer a résumé download: put your PDF in the "public" folder,
  // e.g. public/Sanjay_Gupta_Resume.pdf, and write its name here.
  // Leave it as "" to hide the button.
  resumePdf: "",
};

// ── 2. Quick facts beside your headline ──────────────────────
export const facts: { label: string; value: string }[] = [
  { label: "Experience", value: "18+ years in global financial services" },
  { label: "Most recently", value: "Vice President, HSBC (2017–2026)" },
  { label: "Regions", value: "Bengaluru, Hong Kong, London" },
  { label: "Team led", value: "Six analysts and programme managers" },
];

// ── 3. The trade lifecycle strip (left to right) ─────────────
// One programme you delivered at each stage of a trade's life.
export const lifecycle: { stage: string; work: string; where: string }[] = [
  {
    stage: "Trade capture",
    work: "Physical and financial derivatives trading system implementation, front to middle office to operations",
    where: "British Petroleum, London",
  },
  {
    stage: "Confirmation",
    work: "Change adoption for confirmation-matching automation with Xceptor, Thunderhead and OCR",
    where: "HSBC",
  },
  {
    stage: "Settlement",
    work: "Post-Brexit equity derivatives transaction processing for EEA clients",
    where: "HSBC France",
  },
  {
    stage: "Reconciliation",
    work: "Global Markets intersystem reconciliation re-platforming, through UAT to adoption",
    where: "HSBC",
  },
  {
    stage: "Regulatory control",
    work: "PoC evaluation of a regulatory technology platform that informed a multi-million, multi-year investment decision",
    where: "HSBC Control function",
  },
];

// ── 4. Summary (each item is one paragraph) ──────────────────
export const summary: string[] = [
  "I design and run multi-year transformation portfolios inside regulated investment banking: roadmaps, governance forums with Risk and Compliance, business cases with clear ROI, and the financial tracking that gives senior leadership one trusted view of priorities, progress, risk and cost.",
  "What sets my work apart is front-to-back knowledge of the trade lifecycle, from confirmations and settlement to reconciliation and regulatory reporting, across multiple asset classes. Transformation decisions stay grounded in how operations really work.",
  "Before HSBC I spent nine years in client-facing consulting at Sapient and Infosys, including leading a cross-institution forum of global investment banks.",
];

// ── 5. Expertise, in three groups ────────────────────────────
export const expertise: { group: string; items: string[] }[] = [
  {
    group: "Programme and portfolio",
    items: [
      "Transformation programme delivery",
      "Portfolio roadmap ownership",
      "Business cases and ROI tracking",
      "Budget, financial tracking and benefits realisation",
      "RAID management and escalation",
      "Agile, waterfall and hybrid PMO",
    ],
  },
  {
    group: "Governance and stakeholders",
    items: [
      "Governance forums with Risk, Compliance and Finance",
      "Steering and sponsor committee materials",
      "PoC design, vendor evaluation and investment approval",
      "Cross-regional stakeholder management",
      "Change management and adoption (ADKAR, Kotter)",
      "Team leadership and mentoring",
    ],
  },
  {
    group: "Markets and operations",
    items: [
      "Trade lifecycle, front to back",
      "Confirmations, settlement and reconciliation",
      "Regulatory compliance and reporting",
      "Process re-engineering, Lean Six Sigma and DMAIC",
      "Process modelling with ARIS and BPMN 2.0",
      "Intelligent automation",
    ],
  },
];

// ── 6. Experience (newest first) ─────────────────────────────
// "designation" is optional: your official HR title, shown in small text.
export const experience: {
  role: string;
  designation?: string;
  org: string;
  place: string;
  dates: string;
  summary: string;
  highlights: string[];
}[] = [
  {
    role: "Vice President, Programme Manager – Transformation & Portfolio Governance",
    designation: "Official designation: Senior Business Analyst",
    org: "HSBC",
    place: "Bengaluru",
    dates: "Jun 2023 – Apr 2026",
    summary:
      "Led digital transformation programme delivery for the Control function: a multi-year automation portfolio, PMO and financial governance, structured investment approval, and delivery coordinated across Bengaluru, Hong Kong and London.",
    highlights: [
      "Designed and owned the three-year transformation roadmap for the Control function, sequencing AI, automation and regulatory change initiatives against strategic priorities.",
      "Designed and led a structured PoC for a major regulatory technology platform, covering functional fit, technical architecture and scalability, which directly informed a multi-million, multi-year investment decision at steering committee level.",
      "Created and secured the annual budget for the transformation portfolio and managed it through the year, tracking spend against forecast and acting on variances.",
      "Tracked benefits across all initiatives against approved business cases and reported cost efficiency and ROI to senior leadership.",
      "Enforced governance protocols so that process mapping, policy and risk assessments and benefit cases were complete before initiatives reached governance forums.",
      "Prepared and presented materials for project, steering and sponsor committees, keeping a clear record of decisions and actions.",
      "Led weekly execution reviews against KPIs and gave consolidated, honest status reporting to senior management.",
      "Led and developed a team of six analysts and programme managers, including building their AI literacy.",
      "Evaluated AI use cases across operations and compliance and personally built a multi-agent workflow using CrewAI.",
    ],
  },
  {
    role: "Assistant Vice President – Transformation & Programme Delivery",
    designation: "Official designation: Business Analyst",
    org: "HSBC",
    place: "Bengaluru",
    dates: "Jun 2017 – May 2023",
    summary:
      "Led change management and programme delivery across regulatory and technology transformation in Global Markets, coordinating teams across India and Europe.",
    highlights: [
      "Reconciliation re-platforming: led end-to-end delivery of the Global Markets intersystem reconciliation migration, governing UAT and driving adoption, delivering FTE savings and a self-service automation capability.",
      "Post-Brexit transaction processing (HSBC France): governed delivery of equity derivatives processing for EEA clients across confirmations, settlement, reconciliation and position reporting.",
      "Confirmation automation: led the change adoption programme for confirmation matching with Xceptor, Thunderhead and OCR, delivering FTE savings and materially higher straight-through processing.",
    ],
  },
  {
    role: "Manager – Business Consulting & Programme Management",
    org: "Sapient Consulting",
    place: "Mumbai and Delhi",
    dates: "Jan 2013 – May 2017",
    summary:
      "Client-facing programme management and transformation consulting for global investment banks and asset managers.",
    highlights: [
      "Led the Derivatives Operations of India Forum (DOIF), a cross-institution initiative spanning six global investment banks and 20+ senior stakeholders, driving adoption of new operational standards. This work secured enterprise mandates from Nomura and Société Générale.",
      "Led operating model transformation for Franklin Templeton through to go-live with zero post-implementation escalations.",
      "Built programme governance frameworks, delivery standards and committee materials for the financial services practice.",
    ],
  },
  {
    role: "Senior Consultant – Business Analysis & Programme Delivery",
    org: "Infosys",
    place: "Pune, with client sites in London and the Netherlands",
    dates: "Mar 2008 – Jan 2013",
    summary:
      "Programme delivery and business analysis for global financial services clients, on client sites.",
    highlights: [
      "British Petroleum, London: led business analysis and delivery for a physical and financial derivatives trading system, across front office, middle office and operations, through to production.",
      "ABN Amro, Netherlands: facilitated DMAIC workshops across two merging banking organisations to design an integrated future-state back-office process.",
      "Delivered a BPM platform implementation for a Dutch financial services firm.",
    ],
  },
];

export const earlierCareer: string[] = [
  "Project Manager, Brainvisa Technologies, Pune (2007–2008)",
  "Team Leader, Professional Services, Zycus Infotech, Mumbai (2003–2007)",
];

// ── 7. Working with AI ───────────────────────────────────────
export const ai = {
  intro:
    "I evaluate AI use cases for operations and compliance and have built a multi-agent workflow with CrewAI myself. My focus is where AI genuinely changes a process, and the risk and governance it needs.",
  skills: [
    "Agentic AI (CrewAI)",
    "LLM API integration",
    "Prompt engineering",
    "RAG architecture (conceptual and evaluation)",
    "AI use case evaluation",
    "AI risk and governance",
    "MCP frameworks",
  ],
};

// ── 8. Education and certifications ──────────────────────────
export const education: { name: string; school: string; year?: string }[] = [
  { name: "Senior Management Programme", school: "IIM Calcutta", year: "2020–2022" },
  { name: "MBA, IT and Finance", school: "Bharati Vidyapeeth University" },
  { name: "Bachelor of Engineering", school: "Bangalore University" },
];

export const certifications: { name: string; issuer: string; year?: string }[] = [
  { name: "Generative AI Leader", issuer: "Google Cloud", year: "2026" },
  { name: "Generative and Agentic AI", issuer: "Saïd Business School, University of Oxford", year: "2025" },
  { name: "AI Essentials", issuer: "Saïd Business School, University of Oxford", year: "2025" },
  { name: "GenAI for Compliance Officers", issuer: "Coursera", year: "2025" },
  { name: "Responsible AI: Principles and Practical Applications", issuer: "LinkedIn Learning", year: "2025" },
  { name: "Lean Six Sigma", issuer: "KPMG" },
];

export const tools: string[] = [
  "JIRA", "MS Project", "Confluence", "Advanced Excel", "PowerPoint", "SharePoint",
  "Alteryx", "QlikSense", "ARIS", "Appian", "Python", "Microsoft Copilot",
];

/**
 * All site copy, links and assets, extracted verbatim from the previous
 * index.html. Edit this file to change what the portfolio says.
 */

export type Link = { label: string; href: string; external?: boolean };

export const site = {
  name: 'Saif Rahman',
  title: 'Saif Rahman — AI Product & Strategy',
  description:
    'Saif Rahman — AI Product professional specializing in responsible AI, product strategy, and human-centered AI system design. Based in Toronto.',
  ogDescription:
    'AI Product professional at the intersection of technology, psychology, and business decision-making.',
  url: 'https://saifrahman10.github.io/',
  tagline: 'AI Product & Strategy',
  location: { label: 'Toronto, ON', timeZone: 'America/Toronto' },
  email: 'saifmorahman@gmail.com',
  gaId: 'G-YPQ3VZYZHP',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Thought Leadership', href: '#thought-leadership' },
    { label: 'Contact', href: '#contact' },
  ] satisfies Link[],
  social: {
    github: { label: 'GitHub', handle: 'saifrahman10', href: 'https://github.com/saifrahman10' },
    linkedin: {
      label: 'LinkedIn',
      handle: 'saifrahman10',
      href: 'https://www.linkedin.com/in/saifrahman10/',
    },
    medium: { label: 'Medium', href: 'https://saifmorahman.medium.com/' },
  },
};

export const hero = {
  badge: `${site.tagline} · ${site.location.label}`,
  headline: 'Building AI Products That Earn',
  emphasis: 'Trust',
  intro: 'I translate AI complexity into products, decisions, and systems that work for people.',
  cta: { label: 'See My Work', href: '#projects' },
};

export const current = {
  title: 'Currently',
  role: 'Commercial Analyst at Allergan Aesthetics, an AbbVie company',
  study: "Master of Management in AI, Queen's University (Smith School of Business)",
};

export const about = {
  heading: 'About',
  paragraphs: [
    "I'm Saif Rahman — an AI Product professional with 4+ years of experience across healthcare, retail, and aviation. I have a background in psychology, technical depth in data science and machine learning, and hands-on experience leading AI initiatives from concept to deployment.",
    'I sit at the intersection of AI, human behavior, and business strategy. My focus is building AI products that solve real organizational problems — while earning trust through responsible design, explainability, and stakeholder alignment.',
    "I hold a Master of Management in AI from Queen's University (Smith School of Business) and currently work as a Commercial Analyst at Allergan Aesthetics, an AbbVie company.",
  ],
  pillars: [
    { icon: 'brain', text: 'Psychology-informed product thinking' },
    { icon: 'cog', text: 'Technical depth without a purely technical identity' },
    { icon: 'shield', text: 'Responsible AI & governance as a core practice' },
  ] as const,
};

export type Project = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  href?: string;
  note?: string;
  tags?: string[];
  ctaLabel: string;
};

export const projects: Project[] = [
  {
    title: 'Career Sensei',
    description:
      'AI-powered resume analysis tool using RAG, LangChain, and Gemini — deployed and live.',
    note: 'Heads up: first load may take ~30 seconds while the app wakes up.',
    image: { src: '/assets/images/sensei.svg', alt: 'Career Sensei thumbnail' },
    href: 'https://career-sensei.streamlit.app/',
    ctaLabel: 'View Project',
  },
  {
    title: 'Responsible AI Deployment Console',
    description:
      'AI governance console for data scientists at Alberta Health Services to monitor model drift, ethics benchmarks, and deploy clinical AI responsibly.',
    image: {
      src: '/assets/images/clinician.svg',
      alt: 'Responsible AI Deployment Console thumbnail',
    },
    href: 'https://github.com/saifrahman10/ahs-ai-governance-dashboard',
    tags: ['Alberta Health Services'],
    ctaLabel: 'View Project',
  },
  {
    title: 'AI Ethics Framework',
    description:
      'AI Ethics Framework for responsible model deployment — presented to senior aviation leadership at GTAA.',
    image: { src: '/assets/images/framework.png', alt: 'AI Ethics Framework cover' },
    href: 'https://queensuca-my.sharepoint.com/:w:/g/personal/25ph13_queensu_ca/EVO_HPUqLIRIkyC3quXw9WsBC8HR8n5bKirTOKNjtwJp3w?e=4ZgYda',
    ctaLabel: 'View Project',
  },
  {
    title: 'Length of Stay Prediction',
    description:
      'Clinical length-of-stay prediction model using supervised ML — healthcare domain.',
    image: { src: '/assets/images/bed.svg', alt: 'Length of Stay Prediction thumbnail' },
    href: 'https://docs.google.com/presentation/d/e/2PACX-1vRwUuISXxw1tp_PG0wsqnnKcTGagn1m4gOSdHMLEF_Kt9zBVyhPPHgXXyE2sCeLFdrEBe6ig4F9fxkL/pub?start=false&loop=false&delayms=3000',
    ctaLabel: 'View Project',
  },
];

/** The project highlighted in the hero bento grid. */
export const featuredProject = projects[0];

export type Education = {
  school: string;
  degree: string;
  details: string[];
  note?: string;
  image: { src: string; alt: string };
};

export const education: Education[] = [
  {
    school: "Queen's University — Smith School of Business",
    degree: 'Master of Management in Artificial Intelligence (MMAI)',
    details: ['Completed 2026 · Focus: AI Strategy, Ethical AI, Operations Management'],
    image: { src: '/assets/images/digitalization.png', alt: "Queen's University" },
  },
  {
    school: 'University of Toronto',
    degree: 'Honours Bachelor of Science',
    details: ['Major: Psychology', 'Minors: Computer Science & Mathematics'],
    note: 'This combination — behavioral science + quantitative methods — directly informs how I approach AI product design and human-AI trust.',
    image: { src: '/assets/images/graduation.svg', alt: 'Graduation Cap' },
  },
  {
    school: 'WeCloudData',
    degree: 'Data Science Diploma — Applied Data Science and Big Data (2021)',
    details: [],
    image: { src: '/assets/images/school.svg', alt: 'School' },
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
  image: { src: string; alt: string };
};

export const skills = {
  heading: 'Skills & Expertise',
  primary: {
    title: 'AI Product & Strategy',
    items: [
      'AI Governance',
      'Responsible AI',
      'Stakeholder Alignment',
      'Product Requirements',
      'XAI',
      'Ethical AI Frameworks',
      'AI Roadmapping',
    ],
    image: { src: '/assets/images/server.svg', alt: 'AI Product & Strategy' },
  } satisfies SkillGroup,
  groups: [
    {
      title: 'Technical Stack',
      items: ['Python', 'SQL', 'LangChain', 'Streamlit', 'RAG', 'Vector DBs (ChromaDB)', 'LLMs'],
      image: { src: '/assets/images/coding.svg', alt: 'Technical Stack' },
    },
    {
      title: 'Data & Analytics',
      items: [
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'Tableau',
        'Power BI',
        'Microsoft Fabric',
        'Azure',
      ],
      image: { src: '/assets/images/ml.svg', alt: 'Data & Analytics' },
    },
    {
      title: 'Cloud & Platforms',
      items: ['Azure', 'Google Cloud', 'Streamlit Cloud', 'Gemini API', 'OpenAI API'],
      image: { src: '/assets/images/cloud.svg', alt: 'Cloud & Platforms' },
    },
  ] satisfies SkillGroup[],
};

export const thoughtLeadership = {
  heading: 'Thought Leadership',
  intro:
    'I write about AI at the intersection of psychology, product strategy, and responsible deployment.',
  status: 'Articles coming soon.',
  followText: 'Follow along on',
  link: site.social.medium,
};

export const contact = {
  heading: 'Contact',
  intro:
    "I'm always open to conversations about AI product strategy, responsible AI, or interesting problems worth solving.",
  channels: [
    {
      label: 'Email',
      value: site.email,
      href: `mailto:${site.email}`,
      image: { src: '/assets/images/email.svg', alt: 'Email' },
    },
    {
      label: 'GitHub',
      value: site.social.github.handle,
      href: site.social.github.href,
      external: true,
      image: { src: '/assets/images/github.svg', alt: 'GitHub' },
    },
    {
      label: 'LinkedIn',
      value: site.social.linkedin.handle,
      href: site.social.linkedin.href,
      external: true,
      image: { src: '/assets/images/linkedin.svg', alt: 'LinkedIn' },
    },
  ],
};

export const footer = {
  copyright: '© 2026 Saif Rahman',
  line: `${site.tagline} · ${site.location.label}`,
  links: [
    { label: site.social.github.label, href: site.social.github.href, external: true },
    { label: site.social.linkedin.label, href: site.social.linkedin.href, external: true },
    { label: site.social.medium.label, href: site.social.medium.href, external: true },
  ] satisfies Link[],
};

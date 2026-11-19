export type Kind = 'Work' | 'Project' | 'Education'

export type Chapter = {
  id: string
  year: string
  dates: string
  kind: Kind
  role: string
  org: string
  oneLiner: string
  points: string[]
  stack?: string[]
  now?: boolean
}

/** Oldest first: the order the story happened in. */
export const chapters: Chapter[] = [
  {
    id: 'au',
    year: '2022',
    dates: 'Jun 2022 – Oct 2025',
    kind: 'Education',
    role: 'Bachelor of Computer Science',
    org: 'Assumption University of Thailand',
    oneLiner: 'Where it started: computer science, specialising in data science.',
    points: [
      'Specialisation in Data Science.',
      'Senior project on “Bot Detection System on Social Media”.',
    ],
  },
  {
    id: 'bot',
    year: '2025',
    dates: 'Jan – Apr 2025',
    kind: 'Project',
    role: 'Bot Detection on Social Media',
    org: 'Senior project',
    oneLiner: 'A machine learning system that spots bot accounts on X.',
    points: [
      'Classifies bot accounts using XGBoost with BERT embeddings.',
      'Full pipeline from feature engineering to real-time prediction.',
      'FastAPI backend and Streamlit UI, deployed on AWS.',
    ],
    stack: ['Python', 'XGBoost', 'BERT', 'FastAPI', 'Streamlit', 'AWS'],
  },
  {
    id: 'sumo',
    year: '2025',
    dates: 'Jul – Oct 2025',
    kind: 'Work',
    role: 'Full-Stack Developer',
    org: 'Sumo Shabu Buffet Restaurant',
    oneLiner: 'A whole SaaS platform for running a restaurant, built end to end.',
    points: [
      'Built a SaaS restaurant management platform with interactive 3D floor-plan design.',
      'Booking system integrating a LINE Bot, optimistic concurrency control and dual payment processing.',
    ],
    stack: ['Node.js', 'PostgreSQL', '3D floor plans', 'LINE Bot', 'Payments'],
  },
  {
    id: 'nmt',
    year: '2025',
    dates: 'Aug – Sep 2025',
    kind: 'Work',
    role: 'WordPress Developer',
    org: 'NetMonitoringTech',
    oneLiner: 'Web pages for a network performance monitoring platform.',
    points: [
      'Worked with a cross-functional team on a network monitoring and diagnostics platform.',
      'Designed and customised pages with WordPress and Elementor.',
    ],
    stack: ['WordPress', 'Elementor'],
  },
  {
    id: 'mg',
    year: '2025',
    dates: 'Oct – Dec 2025',
    kind: 'Project',
    role: 'MG Car AR Showroom App',
    org: 'University team project',
    oneLiner: 'Park a real-scale MG car in your driveway, then restyle it.',
    points: [
      'Real-world scale vehicle placement using AR.',
      'Customise colours, wheels and alloys, and lighting.',
      'In-app screenshots with QR-based instant sharing.',
    ],
    stack: ['Unity', 'AR Foundation', 'ARCore', 'C#', 'Android'],
  },
  {
    id: 'tc',
    year: '2025',
    dates: 'Nov 2025 – Jan 2026',
    kind: 'Work',
    role: 'Software Developer Intern',
    org: 'TechCreative LTD',
    oneLiner: 'Client software, shipped alongside experienced developers.',
    points: [
      'Contributed to software and application development for client projects.',
      'Collaborated with senior developers to deliver project-based solutions.',
    ],
  },
  {
    id: 'salesmind',
    year: '2026',
    dates: 'Jan – Jun 2026',
    kind: 'Work',
    role: 'AI Engineer · Intern → Full-Time',
    org: 'SalesMind AI',
    oneLiner: 'Turned raw CRM data into lead intelligence a sales team could use.',
    points: [
      'Built AI automation workflows with n8n and Google Vertex AI (Gemini) to generate structured lead intelligence from CRM data, working with Claude and OpenCode.',
      'Developed static frontend microsites that present the AI-generated insights clearly.',
    ],
    stack: ['n8n', 'Gemini', 'Vertex AI', 'Claude', 'OpenCode'],
  },
  {
    id: 'kmutt',
    year: '2026',
    dates: 'Aug 2026 – Present',
    kind: 'Education',
    role: 'Master’s in Computer Science',
    org: 'King Mongkut’s University of Technology Thonburi',
    oneLiner: 'Now: applied research in computer science and AI.',
    points: ['Evening program.', 'Applied research in computer science and AI.'],
    now: true,
  },
]

export const skills = [
  {
    group: 'AI & LLM',
    items: ['RAG', 'LLM integration', 'Prompt engineering', 'Claude', 'Gemini', 'n8n', 'Make'],
    primary: true,
  },
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'C#', 'Go', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'Django', 'Flask', 'REST APIs', 'Socket.IO'] },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Vue.js', 'React Native', 'Expo', 'HTML', 'CSS'],
  },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Firestore', 'BigQuery'] },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Git', 'GitHub', 'Vercel', 'Cloudinary'],
  },
]

export const certificates = [
  { name: 'Foundation C#', issuer: 'Microsoft Learn', date: 'Jul 2025' },
  { name: 'Unity Essentials Pathway', issuer: 'Unity Technologies', date: 'Jun 2025' },
  { name: 'AWS Cloud Foundation', issuer: 'Amazon Web Services', date: 'Sep 2023' },
  { name: 'Management Skills', issuer: 'Parami University', date: 'Oct 2021' },
]

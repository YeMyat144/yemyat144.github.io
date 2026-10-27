export type Discipline = 'Frontend' | 'Backend' | 'Infra' | 'Open Source';

export const ALL_DISCIPLINES: Discipline[] = ['Frontend', 'Backend', 'Infra', 'Open Source'];

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  disciplines: Discipline[];
  image: string;
  alt: string;
  story: string;
  role: string;
  duration: string;
  result: string;
  stack: string[];
  repoLink?: string;
  liveLink?: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
  aspect: string;
}

export const CANVAS_W = 3400;
export const CANVAS_H = 2400;
export const INTRO = { x: 1720, y: 1160 };
export const INTRO_ORIGIN = { x: 1280, y: 880, width: 860 };

export const projects: Project[] = [
  {
    id: 'promto',
    title: 'Promto',
    client: 'Solo project',
    year: '2026',
    disciplines: ['Frontend', 'Backend', 'Open Source'],
    image: '/projects/promto/n8n.png',
    alt: 'Promto n8n workflow and guided prompt wizard screens',
    story:
      'Most AI tools greet you with a blank box. Promto is a four-step wizard that turns a fuzzy idea into a sharp prompt, then explains every choice in plain language. Dual backends: Gemini direct, or an importable n8n workflow.',
    role: 'Solo — product, design, engineering',
    duration: '3 weeks',
    result: 'Live bilingual EN/MY product with Gemini and n8n generation paths',
    stack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind', 'Gemini API', 'n8n'],
    x: 620,
    y: 360,
    width: 340,
    rotate: -3,
    aspect: '4 / 5',
  },
  {
    id: 'foodloft',
    title: 'FoodLoft',
    client: 'Sumo Shabu Buffet',
    year: '2025',
    disciplines: ['Frontend', 'Backend', 'Infra'],
    image: '/projects/foodloft.png',
    alt: 'FoodLoft restaurant floor plan and booking dashboard',
    story:
      'A restaurant was still running on pen and paper. We built a multi-tenant SaaS: 3D floor editor, LINE-bot bookings, Stripe billing, and an admin dashboard. Soft-locks stop two hosts grabbing the same table.',
    role: 'Full-stack developer, contract',
    duration: '3 months',
    result: 'Client replaced pen-and-paper ops; Stripe subscriptions live',
    stack: ['Next.js', 'Firebase', 'Stripe', 'LINE LIFF', 'Three.js'],
    liveLink: 'https://foodloft.vercel.app/',
    x: 1480,
    y: 220,
    width: 470,
    rotate: 2,
    aspect: '4 / 3',
  },
  {
    id: 'linkup',
    title: 'LinkUp',
    client: 'TechCreative LTD',
    year: '2026',
    disciplines: ['Frontend', 'Backend'],
    image: '/projects/linkup.png',
    alt: 'LinkUp private mobile social app screens',
    story:
      'A private social app for close circles — no feed, no ads. Group chat, shared calendars, daily updates, and media through Capacitor on iOS. Firestore for live messages, FFmpeg on the client for media.',
    role: 'Software developer intern',
    duration: '6 months',
    result: 'Native iOS build with real-time chat, media processing, and E2E tests',
    stack: ['React 19', 'TypeScript', 'Ionic', 'Capacitor', 'Firebase'],
    x: 2420,
    y: 460,
    width: 320,
    rotate: 4,
    aspect: '3 / 4',
  },
  {
    id: 'ar-mg',
    title: 'AR MG Showroom',
    client: 'Honey Yuzu × MG–SAIC',
    year: '2026',
    disciplines: ['Frontend'],
    image: '/projects/mg.png',
    alt: 'Life-size MG car model placed in augmented reality',
    story:
      'Six MG models, colour and tyre swaps, all anchored to a real floor. Built in Unity for the ABAC × MG–SAIC R&D opening and demoed live to executives.',
    role: 'Lead developer',
    duration: '2 months',
    result: 'Demoed live at the official ceremony to MG–SAIC Motor executives',
    stack: ['Unity', 'AR Foundation', 'C#', 'ARKit / ARCore'],
    liveLink:
      'https://www.linkedin.com/posts/honey-yuzu_augmentedreality-ar-unity-activity-7419034795587973121-Fbvw',
    x: 500,
    y: 1280,
    width: 380,
    rotate: 2,
    aspect: '1 / 1',
  },
  {
    id: 'ar-christmas',
    title: 'AR Christmas Tree',
    client: 'Collaborator',
    year: '2024',
    disciplines: ['Frontend'],
    image: '/projects/uxui/ar-tree-figma.png',
    alt: 'Figma screens for an AR Christmas tree message app',
    story:
      'Users grow a virtual tree and send messages that orbit it. Full UX/UI — flows, wireframes, high-fidelity screens — handed to Unity with Firebase sync.',
    role: 'UX/UI designer',
    duration: '1 month',
    result: 'Complete Figma system delivered and handed off to development',
    stack: ['Figma', 'Unity', 'AR Foundation', 'Firebase'],
    x: 1240,
    y: 1620,
    width: 560,
    rotate: -1.5,
    aspect: '16 / 9',
  },
  {
    id: 'family-circle',
    title: 'Family Circle',
    client: 'Collaborator',
    year: '2024',
    disciplines: ['Frontend', 'Backend'],
    image: '/projects/uxui/family-figma.png',
    alt: 'Family Circle private social network Figma screens',
    story:
      'A private family network: daily updates, shared events, a memory timeline. No algorithm, no ads. Designed end to end, later built with Ionic and Capacitor.',
    role: 'UX/UI designer',
    duration: '2 months',
    result: 'Complete flows, wireframes, and iOS prototype handoff',
    stack: ['Figma', 'Ionic', 'Capacitor', 'Firebase'],
    x: 720,
    y: 1880,
    width: 300,
    rotate: -2,
    aspect: '3 / 4',
  },
  {
    id: 'vmes-tour',
    title: 'VMES Tour',
    client: 'VMES / ABAC',
    year: '2024',
    disciplines: ['Frontend'],
    image: '/projects/vmestour.png',
    alt: 'VMES Tour 3D obstacle-course game screenshot',
    story:
      'A 3D obstacle course inside Assumption University. Players answer career questions while running platforms. At the finish the game recommends Engineering or CS.',
    role: 'Level designer',
    duration: '1 month',
    result: 'Live on itch.io; used at VMES open days',
    stack: ['Unity', 'C#', '3D level design'],
    liveLink: 'https://lut-lat-aung.itch.io/vmes-tour',
    x: 2340,
    y: 1440,
    width: 340,
    rotate: -3,
    aspect: '4 / 5',
  },
];

export function countByDiscipline(d: Discipline) {
  return projects.filter((p) => p.disciplines.includes(d)).length;
}

export interface Job {
  id: string;
  hash: string;
  company: string;
  role: string;
  dates: string;
  impact: string;
  body: string;
}

export const experience: Job[] = [
  {
    id: 'riseup',
    hash: 'a3f9c1e',
    company: 'RiseUp Organization',
    role: 'Guest speaker / workshop instructor',
    dates: 'Jul 2026',
    impact: 'Taught AI automation and n8n to 75–100 people over two days.',
    body: 'Day 1 covered AI automation and career pathways. Day 2 was a hands-on n8n workshop: attendees built AI-powered workflows from scratch on Zoom.',
  },
  {
    id: 'salesmind',
    hash: '7c2b410',
    company: 'SalesMind AI',
    role: 'Software engineer',
    dates: 'Jan 2026 – Jun 2026',
    impact: 'Cut LLM token cost ~30% on a live lead-intelligence pipeline.',
    body: 'Built n8n workflows, Gemini classification, and CRM automations. A pre-classifier gate and an 11-tag enum cut misclassified leads and token spend after the internship converted to full-time.',
  },
  {
    id: 'techcreative',
    hash: 'e91d04a',
    company: 'TechCreative LTD',
    role: 'Software developer intern',
    dates: 'Nov 2025 – Apr 2026',
    impact: 'Shipped LinkUp features through to a native iOS build.',
    body: 'Feature work, research, and tests on a private social product. Real-time chat, calendars, and media processing with Ionic, Capacitor, and Firebase.',
  },
  {
    id: 'sumo',
    hash: 'b18e6f2',
    company: 'Sumo Shabu Buffet',
    role: 'Full-stack developer',
    dates: 'Jul 2025 – Oct 2025',
    impact: 'Replaced pen-and-paper bookings with a live SaaS floor plan.',
    body: 'Multi-tenant restaurant platform: 3D floor editor, LINE-bot reservations, optimistic concurrency, and Stripe billing delivered as a team contract.',
  },
];

export const EXPERIENCE_POS = { x: 220, y: 780, width: 280, rotate: -2 };

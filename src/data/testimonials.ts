export interface Testimonial {
  id: string;
  quote: string;
  short: string;
  name: string;
  role: string;
  company: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'salesmind-lor',
    short: 'Professional attitude, prompt design, and AI workflows handled with care.',
    quote:
      'Ye Myat Moe was assigned tasks related to prompt design and AI-related workflows. Throughout his internship, he maintained a professional attitude and communicated appropriately with team members.',
    name: 'Letter of recommendation',
    role: 'Internship supervisor',
    company: 'SalesMind AI',
    x: 2060,
    y: 1680,
    width: 280,
    rotate: 2.5,
  },
  {
    id: 'n8n-workshop',
    short: 'The n8n session made automation feel like something I could actually ship.',
    quote:
      'The Day-2 session gave me valuable hands-on experience with n8n. I learned how to build workflows, connect different tools, and automate tasks. It increased my confidence in using n8n for real-world projects.',
    name: 'Workshop participant',
    role: 'Attendee',
    company: 'n8n Playground, RiseUp',
    x: 2760,
    y: 760,
    width: 260,
    rotate: -3,
  },
];

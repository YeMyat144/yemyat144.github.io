export interface School {
  id: string;
  school: string;
  degree: string;
  years: string;
  points: string[];
}

export const education: School[] = [
  {
    id: 'abac',
    school: 'Assumption University of Thailand',
    degree: 'Bachelor of Computer Science',
    years: 'Jun 2022 – Oct 2025',
    points: [
      'Vincent Mary School of Engineering, Science and Technology',
      'English proficient · Burmese native',
    ],
  },
];

export const EDUCATION_POS = { x: 280, y: 1780, width: 260, rotate: 3 };

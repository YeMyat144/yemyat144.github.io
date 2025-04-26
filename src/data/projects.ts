import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Samsarent',
    description: 'A platform where users can list their items to borrow and request to borrow items',
    image: 'https://i.imgur.com/xBrxQ00.png',
    techStack: ['React', 'Next.js', 'Context API', 'Firebase', 'MUI'],
    repoLink: 'https://github.com/yemyat144/samsarent',
    liveLink: 'https://samsarent.vercel.app/',
  },
  {
    id: 2,
    title: 'NarrateNow',
    description: 'A web app to create and explore interactive stories with choices',
    image: 'https://i.imgur.com/0kFRXUZ.png',
    techStack: ['React', 'Next.js', 'Supabase', 'MUI', 'PostgreSQL'],
    repoLink: 'https://github.com/yemyat144/narratenow',
    liveLink: 'https://narratenow.vercel.app/',
  },
  {
    id: 3,
    title: 'Algovithm',
    description: 'An interactive web application for visualizing sorting and pathfinding algorithms',
    image: 'https://i.imgur.com/THkl3xM.png',
    techStack: ['React', 'D3.js', 'MUI'],
    repoLink: 'https://github.com/yemyat144/algovithm',
    liveLink: 'https://algovithm.vercel.app/',
  },
  {
    id: 4,
    title: 'TicketTango',
    description: 'An online cinema ticket booking system by JuzBird, M3, and YMM that simplifies browsing, selecting, and purchasing tickets',
    image: 'https://i.imgur.com/nbXz1p6.png',
    techStack: ['React', 'MUI', 'MongoDB'],
    repoLink: 'https://github.com/MyoMyatMin/ticket-tango',
    liveLink: 'https://ticketango.vercel.app/',
  },
  {
    id: 5,
    title: 'Fitmemo',
    description: '',
    image: 'https://i.imgur.com/ZjSVdBm.png',
    techStack: ['React', 'MUI', 'MongoDB', 'Express'],
    repoLink: 'https://github.com/yemyat144/fit-memo',
    liveLink: 'https://fitmemo.vercel.app/',
  },
];
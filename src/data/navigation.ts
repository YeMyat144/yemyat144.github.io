import { NavItem, SocialLink } from '../types';
import { 
  DetailsOutlined, 
  FolderOpenOutlined, 
  FolderSharedOutlined,
  GitHub,
  LinkedIn,
  YouTube,
  X,
} from '@mui/icons-material';

export const navItems: NavItem[] = [
  {
    title: 'Profile',
    path: '/',
    icon: DetailsOutlined,
  },
  {
    title: 'Project',
    path: '/projects',
    icon: FolderOpenOutlined,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: FolderSharedOutlined,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: GitHub,
    url: 'https://github.com/yemyat144',
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/yemyatmoe14/',
  },
  {
    name: 'X',
    icon: X,
    url: 'https://x.com/yemyat144',
  },
  {
    name: 'YouTube',
    icon: YouTube,
    url: 'https://www.youtube.com/@yemyatlabs',
  },
];
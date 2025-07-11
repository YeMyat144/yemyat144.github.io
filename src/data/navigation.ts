import { NavItem, SocialLink } from '../types';
import { 
  DetailsOutlined, 
  InfoOutlined, 
  FolderOpenOutlined, 
  FolderSharedOutlined,
  GitHub,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';

export const navItems: NavItem[] = [
  {
    title: 'Profile',
    path: '/',
    icon: DetailsOutlined,
  },
  {
    title: 'About',
    path: '/about',
    icon: InfoOutlined,
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
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/yemyat_moe/',
  },

  
];
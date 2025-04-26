import { NavItem, SocialLink } from '../types';
import { 
  InsertEmoticonOutlined, 
  InfoOutlined, 
  FolderOpenOutlined, 
  FolderSharedOutlined,
  GitHub,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';

export const navItems: NavItem[] = [
  {
    title: 'My Profile',
    path: '/',
    icon: InsertEmoticonOutlined,
  },
  {
    title: 'About Me',
    path: '/about',
    icon: InfoOutlined,
  },
  {
    title: 'Projects',
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
    url: 'https://www.linkedin.com/in/ye-myat-moe-2a6105230/',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/yemyat_moe/',
  },

  
];
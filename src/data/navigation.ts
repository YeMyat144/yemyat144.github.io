import { NavItem, SocialLink } from '../types';
import { 
  DetailsOutlined, 
  FolderOpenOutlined, 
  FolderSharedOutlined,
  GitHub,
  LinkedIn,
  Instagram,
  FacebookOutlined,
  YouTube,
  Telegram,
  Reddit,
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
    name: 'Reddit',
    icon: Reddit,
    url: 'https://www.reddit.com/user/Dest1441/',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/yemyat_moe/',
  },
  {
    name: 'Facebook',
    icon: FacebookOutlined,
    url: 'https://www.facebook.com/ye.m.moe.73/',
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
  {
    name: 'Telegram',
    icon: Telegram,
    url: 'https://t.me/yemyat_moe',
  },
  
];
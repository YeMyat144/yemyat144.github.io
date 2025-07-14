import React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  IconButton,
  useTheme,
  Divider,
  Avatar,
  styled,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems, socialLinks } from '../../data/navigation';
import { motion } from 'framer-motion';

const MotionListItem = motion(ListItem);

interface SidebarPermanentProps {
  drawerWidth: number;
}

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const SidebarPermanent: React.FC<SidebarPermanentProps> = ({ drawerWidth }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'none', md: 'block' },
        '& .MuiDrawer-paper': { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.08)',
        },
      }}
      open
    >
      <DrawerHeader>
        <Avatar
          src='https://i.ibb.co/zWP7Q2BJ/me.png'
          alt="Profile"
          sx={{ 
            width: 80, 
            height: 80, 
            mb: 2, 
            border: `2px solid ${theme.palette.common.white}` 
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          Ye Myat Moe
        </Typography>
      </DrawerHeader>
      
      <List>
        {navItems.map((item) => (
          <MotionListItem 
            key={item.title} 
            disablePadding
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
          >
            <ListItemButton 
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                py: 1.5,
                '&.Mui-selected': {
                  backgroundColor: `${theme.palette.primary.light}20`,
                  borderRight: `3px solid ${theme.palette.primary.main}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.light}30`,
                  }
                }
              }}
            >
              <ListItemIcon sx={{ color: location.pathname === item.path ? theme.palette.primary.main : 'inherit' }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </MotionListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 'auto', pb: 2 }}>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {socialLinks.map((link) => (
              <IconButton 
                key={link.name} 
                color="primary" 
                component="a" 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  transition: 'transform 0.2s', 
                  '&:hover': { transform: 'translateY(-3px)' } 
                }}
              >
                <link.icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SidebarPermanent;
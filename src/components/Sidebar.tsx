import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from '@mui/material'
import {
  Person as PersonIcon,
  Work as WorkIcon,
  Mail as MailIcon,
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'

const drawerWidth = 220

const menuItems = [
  { text: 'About Me', icon: <PersonIcon />, path: '/' },
  { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
  { text: 'Contact', icon: <MailIcon />, path: '/contact' },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          backgroundImage: 'linear-gradient(180deg, #0A1929 0%, #0F2744 100%)',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >

      <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mb: 1,
            border: '4px solid rgba(255, 255, 255, 0.1)',
          }}
          src='/me.png'
        />
        <Typography variant="h6" sx={{ fontWeight: 450 }}>
          Ye Myat Moe
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />

      <List sx={{ px: 2, py: 3}}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(100, 181, 246, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(100, 181, 246, 0.16)',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 181, 246, 0.24)',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 44 }}>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  sx: { letterSpacing: '0.02em', fontWeight: 500 }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Drawer>
  )
}

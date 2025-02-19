import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography, Divider, Tabs, Tab } from '@mui/material'
import { Person as PersonIcon, Work as WorkIcon, Mail as MailIcon } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { SyntheticEvent } from 'react'

const drawerWidth = 220

const menuItems = [
  { text: 'About Me', icon: <PersonIcon />, path: '/aboutme' },
  { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
  { text: 'Contact', icon: <MailIcon />, path: '/contact' },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedTab, setSelectedTab] = useState(location.pathname)
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md')) 

  const handleTabChange = (_event: SyntheticEvent, newValue: string) => {
    navigate(newValue)
    setSelectedTab(newValue)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {isMobile ? (
        // Tab Bar for Mobile
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', bottom: 0, left: 0, width: '100%', bgcolor: '#0A1929', zIndex: 10 }}>
          <Box sx={{ ml: 2 }} onClick={() => navigate('/')} >
            <Avatar
              sx={{
                pointer: 'cursor',
                width: 30,
                height: 30,
              }}
              src='https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/477599155_601347436127305_8647772254490006977_n.png?stp=dst-png_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VxXyZJ1YyIEQ7kNvgG1fAMk&_nc_oc=AdipsPsaXpZn7seVUOFLdrXMBr_3NET-crNubQnGGdwkUe0fhVP-YKX0lXhB-aH2M-8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&oh=03_Q7cD1gGPXaNg5PxNqBl7mAgOJFCVEoC1nEbnMlEFnxlZ9POSHw&oe=67DDB652'
            />
          </Box>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              flexGrow: 1,
              bgcolor: '#0A1929',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              zIndex: 10,
            }}
          >
            {menuItems.map((item) => (
              <Tab 
                key={item.text} 
                value={item.path}
                icon={item.icon}
                sx={{ color: 'white' }}
              />
            ))}
          </Tabs>
        </Box>
      ) : (
        // Sidebar for Desktop
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
            <Box sx={{ cursor: 'pointer', mb: 2 }} onClick={() => navigate('/')} >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  border: '4px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                         '&:hover': {
                   transform: 'scale(1.05)',
                  },
                }}
                src='https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/477599155_601347436127305_8647772254490006977_n.png?stp=dst-png_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=VxXyZJ1YyIEQ7kNvgG1fAMk&_nc_oc=AdipsPsaXpZn7seVUOFLdrXMBr_3NET-crNubQnGGdwkUe0fhVP-YKX0lXhB-aH2M-8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&oh=03_Q7cD1gGPXaNg5PxNqBl7mAgOJFCVEoC1nEbnMlEFnxlZ9POSHw&oe=67DDB652'
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 450 }}>
              Ye Myat Moe
            </Typography>
          </Box>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
          <List sx={{ px: 2, py: 3 }}>
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
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 44 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: { letterSpacing: '0.02em', fontWeight: 500 },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
      </Box>
    </Box>
  )
}

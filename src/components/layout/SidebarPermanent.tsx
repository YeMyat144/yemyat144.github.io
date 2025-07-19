import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems, socialLinks } from '../../data/navigation';
import { motion } from 'framer-motion';

const MotionListItem = motion(ListItem);

interface SidebarPermanentProps {
  drawerWidth: number;
}

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
          backgroundColor: '#0d1114',
          borderRight: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 0',
        },
      }}
      open
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          letterSpacing: '-0.1rem',
          mb: 1,
          fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
          textOrientation: 'mixed',
          position: 'absolute',
          left: 18,
        }}
      >
        YMM
      </Typography>

      {/* Slogan */}
      <Typography
        variant="body2"
        sx={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          position: 'absolute',
          left: 18,
          top: '22%',
          transform: 'rotate(180deg)',
          fontSize: '0.95rem',
          letterSpacing: '0.1em',
        }}
      >
        FULL-STACK DEVELOPER
      </Typography>

      {/* Navigation Links - Centered */}
      <List sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        mt: 12,
      }}>
        {navItems.map((item) => (
          <MotionListItem
            key={item.title}
            disablePadding
            sx={{
              mb: 2,
              width: 'auto',
            }}
          >
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                py: 1,
                px: 2,
                borderRadius: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.9rem',
                fontWeight: 500,
                width: 'fit-content',
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  '& .MuiListItemText-primary': {
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      backgroundColor: theme.palette.primary.main,
                    }
                  }
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: location.pathname === item.path
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  }
                }}
              />
            </ListItemButton>
          </MotionListItem>
        ))}
      </List>

      {/* Social Icons*/}
      <Box sx={{
        position: 'absolute',
        right: 16,
        bottom: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        {socialLinks.map((link) => (
          <IconButton
            key={link.name}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.text.primary,
              p: 1,
              '&:hover': {
                color: theme.palette.primary.main,
              }
            }}
          >
            <link.icon fontSize="small" />
          </IconButton>
        ))}
      </Box>
      {/* Footer */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 4,
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        textOrientation: 'mixed',
        position: 'absolute',
        left: 15,
        bottom: 20,
        letterSpacing: '0.1em',
      }}>
        <Typography
          variant="caption"
        >
          © 2025 YE MYAT MOE
        </Typography>
        <Typography
          variant="caption"
          sx={{
            cursor: 'pointer',
            '&:hover': { color: theme.palette.primary.main }
          }}
          onClick={() => window.location.href = 'mailto:yemyatmoe.tetee@gmail.com'}
        >
          LET'S COLLABORATE
        </Typography>

        <Typography
          variant="caption"
          sx={{
            mb: 1,
            cursor: 'pointer',
            '&:hover': { color: theme.palette.primary.main }
          }}
          onClick={() => window.open('https://www.ajrbrothers.com/', '_blank')}
        >
          REFERENCE FROM AJR
        </Typography>
      </Box>
    </Drawer>
  );
};

export default SidebarPermanent;
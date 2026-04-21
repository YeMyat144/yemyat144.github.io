import React from 'react';
import { Box, Drawer, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import { navItems, socialLinks } from '../../data/navigation';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--paper)',
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.25,
          borderBottom: '1px solid var(--ink)',
        }}
      >
        <Typography variant="caption" sx={{ fontFamily: 'JetBrains Mono, monospace' }}>
          INDEX · §
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{ border: '1px solid var(--ink)', borderRadius: 0, width: 40, height: 40 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: 3,
          py: 5,
          gap: 0,
        }}
      >
        {navItems.map((item, i) => (
          <NavLink
            key={item.title}
            to={item.path}
            end={item.path === '/'}
            onClick={onClose}
            style={{ textDecoration: 'none' }}
          >
            {({ isActive }) => (
              <Box
                sx={{
                  py: 2.5,
                  borderBottom: '1px solid var(--rule-strong)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontFamily: 'JetBrains Mono, monospace', opacity: 0.6 }}
                >
                  0{i + 1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '2.25rem',
                    fontWeight: 400,
                    fontStyle: isActive ? 'italic' : 'normal',
                    color: isActive ? 'var(--signal)' : 'var(--ink)',
                    letterSpacing: '-0.02em',
                    flex: 1,
                  }}
                >
                  {item.title === 'Project' ? 'Work' : item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                  }}
                >
                  →
                </Typography>
              </Box>
            )}
          </NavLink>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          px: 3,
          py: 3,
          borderTop: '1px solid var(--ink)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="caption">FOLLOW / ELSEWHERE</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {socialLinks.map((s) => (
            <Typography
              key={s.name}
              component="a"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                '&:hover': { color: 'var(--signal)' },
              }}
            >
              ↗ {s.name}
            </Typography>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;

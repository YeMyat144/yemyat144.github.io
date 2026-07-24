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
          maxWidth: 420,
          backgroundColor: 'var(--bg)',
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
          py: 1.5,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: '0.9375rem' }}>Menu</Typography>
        <IconButton onClick={onClose} sx={{ width: 40, height: 40 }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', px: 2.5, py: 3, gap: 0.5 }}>
        {navItems.map((item) => (
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
                  py: 1.5,
                  px: 1.25,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1.125rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--fg)' : 'var(--muted)',
                  bgcolor: isActive ? 'var(--bg-subtle)' : 'transparent',
                }}
              >
                {item.title}
              </Box>
            )}
          </NavLink>
        ))}
      </Box>

      <Box sx={{ px: 2.5, py: 3, mt: 'auto', borderTop: '1px solid var(--border)' }}>
        <Typography className="text-label" sx={{ mb: 1.5 }}>
          Elsewhere
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {socialLinks.map((s) => (
            <Typography
              key={s.name}
              component="a"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: '0.8125rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                '&:hover': { color: 'var(--fg)' },
              }}
            >
              {s.name}
            </Typography>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;

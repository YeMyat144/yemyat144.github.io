import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from '../../data/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MastheadProps {
  onToggleMenu: () => void;
  mobileOpen: boolean;
}

const Masthead: React.FC<MastheadProps> = ({ onToggleMenu, mobileOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(250, 250, 250, 0.82)' : 'rgba(250, 250, 250, 0.65)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        transition: 'border-color 200ms ease, background-color 200ms ease',
      }}
    >
      <Box
        className="page-shell"
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--fg)',
            textDecoration: 'none',
            '&:hover': { color: 'var(--highlight)' },
          }}
        >
          Ye Myat Moe
        </Typography>

        <Box
          component="nav"
          aria-label="Primary"
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}
        >
          {navItems.map((item) => (
            <NavLink key={item.title} to={item.path} end={item.path === '/'} style={{ textDecoration: 'none' }}>
              {({ isActive }) => (
                <Box
                  component={motion.span}
                  sx={{
                    position: 'relative',
                    display: 'inline-flex',
                    px: 1.25,
                    py: 0.75,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--fg)' : 'var(--muted)',
                    borderRadius: '999px',
                    transition: 'color 160ms ease',
                    '&:hover': { color: 'var(--fg)' },
                  }}
                >
                  {item.title === 'Project' ? 'Work' : item.title}
                  {isActive && (
                    <Box
                      component={motion.span}
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '999px',
                        bgcolor: 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        zIndex: -1,
                      }}
                    />
                  )}
                </Box>
              )}
            </NavLink>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              alignItems: 'center',
              gap: 0.75,
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--fg-secondary)',
              px: 1.25,
              py: 0.65,
              borderRadius: '999px',
              border: '1px solid var(--border)',
            }}
          >
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: 'var(--success)',
                flexShrink: 0,
              }}
            />
            Available · Jul 2026
          </Box>

          <IconButton
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={onToggleMenu}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              width: 40,
              height: 40,
            }}
          >
            {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Masthead;

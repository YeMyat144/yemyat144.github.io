import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation, Link as RouterLink } from 'react-router-dom';
import Masthead from './Masthead';
import MobileDrawer from './MobileDrawer';
import { socialLinks } from '../../data/navigation';
import { useLenis } from '../../hooks/useLenis';

const MotionBox = motion(Box);

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg)',
        color: 'var(--fg)',
      }}
    >
      <Masthead mobileOpen={mobileOpen} onToggleMenu={() => setMobileOpen((v) => !v)} />
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <AnimatePresence mode="wait">
        <MotionBox
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          sx={{ flex: 1 }}
        >
          <Outlet />
        </MotionBox>
      </AnimatePresence>

      <Box
        component="footer"
        sx={{
          mt: 'auto',
          borderTop: '1px solid var(--border)',
          py: { xs: 4, md: 6 },
        }}
      >
        <Box className="page-shell">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
              gap: { xs: 4, md: 6 },
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em', mb: 1 }}>
                Ye Myat Moe
              </Typography>
              <Typography sx={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--muted)', maxWidth: 360 }}>
                AI automation engineer building production LLM workflows and full-stack products.
              </Typography>
              <Typography
                component="a"
                href="mailto:yemyatmoe.tetee@gmail.com"
                sx={{
                  display: 'inline-block',
                  mt: 2,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  '&:hover': { color: 'var(--highlight)' },
                }}
              >
                yemyatmoe.tetee@gmail.com
              </Typography>
            </Box>

            <Box>
              <Typography className="text-label" sx={{ mb: 1.5 }}>
                Navigation
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                {[
                  { label: 'Profile', path: '/' },
                  { label: 'Work', path: '/work' },
                  { label: 'Contact', path: '/contact' },
                ].map((item) => (
                  <Typography
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      fontSize: '0.9375rem',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      width: 'fit-content',
                      transition: 'color 160ms ease',
                      '&:hover': { color: 'var(--fg)' },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography className="text-label" sx={{ mb: 1.5 }}>
                Elsewhere
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <IconButton
                    key={s.name}
                    component="a"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    sx={{
                      width: 36,
                      height: 36,
                      color: 'var(--muted)',
                      transition: 'color 160ms ease',
                      '&:hover': { color: 'var(--fg)', bgcolor: 'transparent' },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 5,
              pt: 3,
              borderTop: '1px solid var(--border)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'space-between',
              fontSize: '0.8125rem',
              color: 'var(--muted)',
            }}
          >
            <span>© {new Date().getFullYear()} Ye Myat Moe</span>
            <span>Bangkok · Open to remote</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

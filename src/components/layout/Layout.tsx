import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Masthead from './Masthead';
import Marquee from './Marquee';
import MobileDrawer from './MobileDrawer';
import Cursor from '../cursor/Cursor';
import { socialLinks } from '../../data/navigation';

const MotionBox = motion(Box);

const MARQUEE_ITEMS = [
  'Previously — AI Automation Engineer @ SalesMind AI',
  'Currently learning — DevOps',
  'Based in Bangkok — open to remote',
  'Writes code · breaks things · writes prompts',
  'Reach: yemyatmoe.tetee@gmail.com',
  'Now playing — n8n workflows, LLM pipelines',
];

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--paper)',
        color: 'var(--ink)',
        position: 'relative',
      }}
    >
      <Cursor />

      <Masthead
        mobileOpen={mobileOpen}
        onToggleMenu={() => setMobileOpen((v) => !v)}
      />
      <Marquee items={MARQUEE_ITEMS} />
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <AnimatePresence mode="wait">
        <MotionBox
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          sx={{
            flex: 1,
            position: 'relative',
            zIndex: 3,
          }}
        >
          <Outlet />
        </MotionBox>
      </AnimatePresence>

      {/* Footer — colophon */}
      <Box
        component="footer"
        sx={{
          mt: 8,
          borderTop: '1px solid var(--ink)',
          backgroundColor: 'var(--paper-deep)',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: { xs: 4, md: 8 },
            maxWidth: 1400,
            mx: 'auto',
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: 'var(--signal)' }}>
              COLOPHON
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Fraunces, serif',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1,
                fontStyle: 'italic',
                fontWeight: 300,
                mt: 1,
                letterSpacing: '-0.02em',
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
              }}
            >
              Let&apos;s make something
              <br />
              worth reading.
            </Typography>
            <Typography
              component="a"
              href="mailto:yemyatmoe.tetee@gmail.com"
              sx={{
                mt: 2,
                display: 'inline-block',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
                '&:hover': { color: 'var(--signal)' },
              }}
            >
              ↗ yemyatmoe.tetee@gmail.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption">INDEX</Typography>
            <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {['Profile / §01', 'Work / §02', 'Contact / §03'].map((t) => (
                <Typography
                  key={t}
                  sx={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem' }}
                >
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="caption">ELSEWHERE</Typography>
            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.name}
                  component="a"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  sx={{
                    border: '1px solid var(--ink)',
                    borderRadius: 0,
                    width: 38,
                    height: 38,
                  }}
                >
                  <s.icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 6,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'space-between',
            borderTop: '1px dashed var(--rule-strong)',
            pt: 3,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <span>© {new Date().getFullYear()} YE MYAT MOE</span>
          <span>Set in Fraunces · Space Grotesk · JetBrains Mono</span>
          <span>Handset in Bangkok</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

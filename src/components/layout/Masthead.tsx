import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MastheadProps {
  onToggleMenu: () => void;
  mobileOpen: boolean;
}

const formatDate = (d: Date) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
  ];
  const day = String(d.getDate()).padStart(2, '0');
  return `${days[d.getDay()]} · ${day} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

const formatTime = (d: Date) => {
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
};

const Masthead: React.FC<MastheadProps> = ({ onToggleMenu, mobileOpen }) => {
  const location = useLocation();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const section =
    location.pathname === '/'
      ? 'PROFILE'
      : location.pathname.startsWith('/projects')
      ? 'WORK'
      : location.pathname.startsWith('/contact')
      ? 'CONTACT'
      : 'INDEX';

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        backgroundColor: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
      }}
    >
      {/* Top meta strip */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 },
          py: 1,
          borderBottom: '1px solid var(--rule)',
          gap: 2,
          fontSize: '0.68rem',
        }}
      >
        <Typography variant="caption" sx={{ fontFamily: 'JetBrains Mono, monospace' }}>
          YMM · FIELD NOTES · VOL. 01
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          {formatDate(now)}  ·  {formatTime(now)} ICT
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          §&nbsp;{section}
        </Typography>
      </Box>

      {/* Masthead row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr auto', md: '1fr auto 1fr' },
          alignItems: 'end',
          px: { xs: 2, md: 4 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 1.5, md: 2 },
          gap: 2,
        }}
      >
        {/* Left: identity */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--signal)', fontSize: '0.65rem' }}
          >
            Portfolio / Index / 2026
          </Typography>
          <Typography
            component={NavLink}
            to="/"
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem', lg: '3.6rem' },
              lineHeight: 0.95,
              textDecoration: 'none',
              color: 'var(--ink)',
              fontFamily: 'Fraunces, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
            }}
          >
            Ye Myat Moe
          </Typography>
        </Box>

        {/* Center: issue mark (desktop only) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            gap: 0.5,
            borderLeft: '1px solid var(--rule-strong)',
            borderRight: '1px solid var(--rule-strong)',
            px: 3,
            py: 1,
            alignSelf: 'stretch',
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            ISSUE
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fraunces, serif',
              fontSize: '2rem',
              lineHeight: 1,
              fontWeight: 500,
            }}
          >
            №01
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            Software Engineer
          </Typography>
        </Box>

        {/* Right: desktop nav + mobile menu */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-end', md: 'flex-end' },
            alignItems: 'end',
            gap: 3,
          }}
        >
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
            }}
          >
            {navItems.map((item, i) => (
              <NavLink
                key={item.title}
                to={item.path}
                end={item.path === '/'}
                style={{ textDecoration: 'none' }}
              >
                {({ isActive }) => (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 1,
                      color: 'var(--ink)',
                      borderBottom: isActive
                        ? '2px solid var(--signal)'
                        : '2px solid transparent',
                      pb: 0.5,
                      transition: 'border-color 200ms ease, color 200ms ease',
                      '&:hover': { color: 'var(--signal)' },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: 'inherit', opacity: 0.6 }}
                    >
                      0{i + 1}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Fraunces, serif',
                        fontSize: '1.1rem',
                        fontStyle: isActive ? 'italic' : 'normal',
                        fontWeight: 500,
                        color: 'inherit',
                      }}
                    >
                      {item.title === 'Project' ? 'Work' : item.title}
                    </Typography>
                  </Box>
                )}
              </NavLink>
            ))}
          </Box>

          <IconButton
            aria-label={mobileOpen ? 'close menu' : 'open menu'}
            onClick={onToggleMenu}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              border: '1px solid var(--ink)',
              borderRadius: 0,
              width: 40,
              height: 40,
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Masthead;

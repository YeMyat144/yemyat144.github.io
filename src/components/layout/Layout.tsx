import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SidebarPermanent from './SidebarPermanent';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Layout: React.FC = () => {
  const drawerWidth = 280;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      {/* Background image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          backgroundImage: 'url(https://github.com/YeMyat144/yemyat144.github.io/blob/main/public/ff.png?raw=true)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.7)',
        }}
      />
      {/* Mobile Logo (fixed, left) */}
      {!mobileOpen && (
        <Box
          sx={{
            position: 'fixed',
            backgroundColor: '#252525',
            zIndex: 1400,
            display: { xs: 'block', sm: 'block', md: 'none' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: '2rem',
              letterSpacing: '-0.1em',
              fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
              color: 'white',
              px: 2,
              py: 0.5,
            }}
          >
            YMM
          </Typography>
        </Box>
      )}

      {/* Mobile menu button (fixed, right) */}
      <Box
        sx={{
          position: 'fixed',
          right: 16,
          zIndex: 1400,
          display: { xs: 'block', sm: 'block', md: 'none' },
        }}
      >
        <IconButton
          color="inherit"
          aria-label={mobileOpen ? 'close drawer' : 'open drawer'}
          edge="end"
          onClick={handleDrawerToggle}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Mobile Sidebar Drawer */}
      <Sidebar
        isOpen={mobileOpen}
        onClose={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      {/* Desktop Permanent Sidebar */}
      <SidebarPermanent drawerWidth={drawerWidth} />

      <MotionBox
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` },
          backgroundColor: 'transparent',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Artistic background overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
          }}
        />
        {/* Ocean waves background effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            '@keyframes waveAnimation': {
              '0%, 100%': {
                transform: 'translateX(0) translateY(0)',
              },
              '25%': {
                transform: 'translateX(-10px) translateY(-5px)',
              },
              '50%': {
                transform: 'translateX(10px) translateY(5px)',
              },
              '75%': {
                transform: 'translateX(-5px) translateY(10px)',
              },
            },
          }}
        />
        {/* Content area */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            p: 4,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Outlet />
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Layout;
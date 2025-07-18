import React, { useState } from 'react';
import { Box, useTheme, IconButton } from '@mui/material';
import { CatchingPokemon as MenuIcon } from '@mui/icons-material';
import Sidebar from './Sidebar';
import SidebarPermanent from './SidebarPermanent';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const drawerWidth = 220;

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="success"
        aria-label="open menu"
        onClick={handleSidebarToggle}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: theme.zIndex.drawer + 2,
          bgcolor: theme.palette.secondary.main,
          boxShadow: theme.shadows[5],
          display: { xs: 'flex', md: 'none' },
          '&:hover': {
            bgcolor: theme.palette.secondary.main,
          },
          width: 60,
          height: 60,
        }}
        size="large"
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        drawerWidth={drawerWidth}
      />
      <SidebarPermanent drawerWidth={drawerWidth} />

      <MotionBox
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          pt: { xs: 7, md: 3 }, // Add padding top for mobile to account for menu button
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </MotionBox>
    </Box>
  );
};

export default Layout;
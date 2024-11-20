import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, Link as MuiLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/temp.png';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Box sx={{ mb: 5, borderRadius: 0, border: 0 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4">YeMyat</Typography>          
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="black"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                  <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                    <ListItemText primary="Me" />
                  </ListItem>
                  <ListItem button component={Link} to="/projects" onClick={toggleDrawer}>
                    <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MuiLink
                component={Link}
                to="/"
                sx={{
                  mx: 2,
                  color: 'black',
                  textDecoration: isActive('/') ? 'underline' : 'none',
                }}
              >
                <Typography variant="h6">Me</Typography>
              </MuiLink>
              <MuiLink
                component={Link}
                to="/projects"
                sx={{
                  mx: 2,
                  color: 'black',
                  textDecoration: isActive('/projects') ? 'underline' : 'none',
                }}
              >
                <Typography variant="h6">Projects</Typography>
              </MuiLink>
              <MuiLink
                component={Link}
                to="/contact"
                sx={{
                  mx: 2,
                  color: 'black',
                  textDecoration: isActive('/contact') ? 'underline' : 'none',
                }}
              >
                <Typography variant="h6">Contact</Typography>
              </MuiLink>
            </Box>
          )}
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;

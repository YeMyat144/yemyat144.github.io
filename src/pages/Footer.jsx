import React from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
      <IconButton href="https://github.com/yemyat144" aria-label="GitHub">
        <GitHubIcon sx={{ fontSize: 42, color: theme.palette.text.primary }} />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/ye-myat-moe-2a6105230/" aria-label="LinkedIn">
        <LinkedInIcon sx={{ fontSize: 48, color: theme.palette.text.primary }} />
      </IconButton>
      <IconButton href="https://instagram.com/dest_voyage_" aria-label="Instagram">
        <InstagramIcon sx={{ fontSize: 45, color: theme.palette.text.primary }} />
      </IconButton>
    </Box>
  );
};

export default Footer;

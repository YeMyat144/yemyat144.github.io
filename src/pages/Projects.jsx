import React from 'react';
import { 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  CardActions, 
  Chip,
  Grid,
  ThemeProvider, 
  createTheme, 
  responsiveFontSizes 
} from '@mui/material';
import { styled } from '@mui/system';
import { Launch as LaunchIcon } from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

let theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

theme = responsiveFontSizes(theme);

const StyledCard = styled(Card)(({ theme }) => ({
  height: '215px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function Projects() {
  const projectData = [
    { 
      name: 'Tale&Twist', 
      description: 'Branching narratives where user choices influence the outcome', 
      repoLink: 'https://talentwist.vercel.app',
      tags: ['React', 'Next.js', 'Vercel']
    },
    { 
      name: 'TicketTango', 
      description: 'An online system for booking cinema tickets featuring JuzBird, M3', 
      repoLink: 'https://ticket-tango.vercel.app/',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    { 
      name: 'TaskCard', 
      description: 'A task board with customizable columns and draggable cards.', 
      repoLink: 'https://task-card-trello.netlify.app/',
      tags: ['React', 'Node.js', 'Netlify']
    },
    { 
      name: 'Virtual Keyboard', 
      description: 'A virtual keyboard controlled by hand gestures using Python', 
      repoLink: 'https://github.com/YeMyat144/virtual_keyboard',
      tags: ['Python', 'OpenCV', 'Machine Learning']
    },
    { 
      name: 'TrueTrack', 
      description: 'A tracker app helping users manage their finances', 
      repoLink: 'https://github.com/YeMyat144/true-track',
      tags: ['TypeScript', 'HTML', 'CSS']
    },
    { 
      name: 'SignQueen', 
      description: 'A fun and interactive zodiac sign quiz app', 
      repoLink: 'https://signqueen.netlify.app/',
      tags: ['JavaScript', 'HTML', 'CSS']
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          bgcolor: 'background.default',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box 
          sx={{ 
            flex: 1, 
            px: 2, 
            py: 1, 
            overflowY: 'auto',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom color="secondary">
            My Projects
          </Typography>
          <Grid container spacing={2}>
            {projectData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box>
                      {project.tags.map((tag, tagIndex) => (
                        <StyledChip key={tagIndex} label={tag} size="small" />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<LaunchIcon />}
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                    >
                      View Project
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Projects;

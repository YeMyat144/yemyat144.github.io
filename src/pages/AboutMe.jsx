import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Avatar, 
  Button, 
  Grid, 
  Paper, 
  Divider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/system';
import { Download as DownloadIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Code as CodeIcon, Storage as StorageIcon, Brush as BrushIcon } from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';


let theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  border: `4px solid ${theme.palette.primary.main}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: theme.shape.borderRadius * 5,
  textTransform: 'none',
  fontWeight: 600,
}));

const SkillChip = ({ icon, label, color }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mr: 1, mb: 1 }}>
    {icon}
    <Typography variant="body2" sx={{ ml: 1 }}>{label}</Typography>
  </Box>
);


const skills = [
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 60 },
  { name: 'SQL', level: 65 },
  // Add more skills as needed
];

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 2, flex: 1 }}>
          <StyledPaper elevation={3}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', mt: 1 }}>
                  <Typography variant="h4" component="h1" gutterBottom align="center">
                    Ye Myat Moe
                  </Typography>
                  <Typography variant="h6" color="textSecondary" paragraph align="center">
                    Full Stack Web Developer
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 1 }}>
                    <SkillChip icon={<CodeIcon />} label="Frontend" color="primary" />
                    <SkillChip icon={<StorageIcon />} label="Backend" color="secondary" />
                    <SkillChip icon={<BrushIcon />} label="UI/UX" />
                  </Box>
                </Box>
                <Typography variant="body1" paragraph sx={{ fontSize: '0.9rem' }}>
                  I am a passionate full stack web developer with a keen eye for creating functional websites.
                  With extensive experience in both front-end and back-end development, I thrive on tackling new challenges
                  and expanding my skill set. My goal is to build intuitive and efficient web solutions that make
                  a positive impact on users' lives and businesses.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Key Skills
                  </Typography>
                  {skills.map((skill) => (
                    <Box key={skill.name} sx={{ mt: 1 }}>
                      <Typography variant="body2" color="textSecondary">
                        {skill.name}
                      </Typography>
                      <LinearProgress variant="determinate" value={skill.level} color="primary" />
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    href="/assets/cv.pdf"
                    download
                  >
                    Download Resume
                  </StyledButton>
                </Box>
              </Grid>
            </Grid>
          </StyledPaper>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default AboutMe;
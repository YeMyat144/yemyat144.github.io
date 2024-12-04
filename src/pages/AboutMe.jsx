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
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000',
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
  padding: theme.spacing(3),
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
  height: '100%',
  overflow: 'auto',
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
];

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        overflow: 'hidden',
        bgcolor: theme.palette.background.default,
      }}>
        <Header />
        <Box component="main" sx={{  flex: 1, overflow: 'auto', mr: 5 ,ml:5 }}>
          <StyledPaper elevation={3}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              <Grid item xs={12} >
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', mt: 1 }}>
                  <Typography variant="h4" component="h1" gutterBottom align="center">
                    Ye Myat Moe
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" paragraph align="center">
                    Full Stack Web Developer
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 1 }}>
                    <SkillChip icon={<CodeIcon />} label="Frontend" color="primary" />
                    <SkillChip icon={<StorageIcon />} label="Backend" color="secondary" />
                    <SkillChip icon={<BrushIcon />} label="UI/UX" />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', mt: 1 }}>
                <Typography variant="body1" paragraph sx={{ maxWidth: '900px', fontSize: '0.9rem', textAlign: 'center' }}>
                  I am a passionate full stack web developer with a keen eye for creating functional websites.
                  With extensive experience in both front-end and back-end development, I thrive on tackling new challenges
                  and expanding my skill set. My goal is to build intuitive and efficient web solutions that make
                  a positive impact on users' lives and businesses.
                </Typography>
                
                  <Typography variant="h6" gutterBottom>
                    Key Skills
                  </Typography>
                  {skills.map((skill) => (
                    <Box key={skill.name} sx={{ mt: 1, width: '80%', maxWidth: '600px'}}>
                      <Typography variant="body2" color="textSecondary">
                        {skill.name}
                      </Typography>
                      <LinearProgress variant="determinate" value={skill.level} sx={{  
                          bgcolor: '#808080', 
                          '& .MuiLinearProgress-bar': {  
                            backgroundColor: '#000',  
                          }  }}
                         />
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <StyledButton
                    variant="contained"
                    sx={{ backgroundColor: '#000' }}
                    startIcon={<DownloadIcon />}
                    href="/assets/cv.pdf"
                    download
                  >
                    Resume
                  </StyledButton>
                </Box>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default AboutMe;
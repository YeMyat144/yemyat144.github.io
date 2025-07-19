import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Stack,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';

const MotionBox = motion(Box);

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>  
        <title>Ye Myat Moe | Profile</title>
      </Helmet>
      
      <Box sx={{ maxWidth: 1400, mx: 'auto', position: 'relative' }}>
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{ 
            textAlign: 'center',
            mb: 8,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Large Title */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '3rem', md: '5rem', lg: '7rem' },
              fontWeight: 900,
              letterSpacing: '0.1em',
              mb: 2,
              background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
            }}
          >
            YE MYAT MOE
          </Typography>
          
          {/* Subtitle */}
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 300,
              letterSpacing: '0.2em',
              mb: 4,
              opacity: 0.8,
              textTransform: 'uppercase',
            }}
          >
            FULL-STACK DEVELOPER
          </Typography>
          
          {/* Description */}
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
              lineHeight: 1.8,
              opacity: 0.9,
            }}
          >
            Computer Science undergraduate with expertise in machine learning, full-stack development, 
            and game development. Passionate about creating innovative solutions that solve real-world challenges.
          </Typography>
          
          {/* Action Buttons */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
            sx={{ mb: 8, width: '100%', maxWidth: 500, mx: 'auto' }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              component="a"
              href="https://drive.google.com/uc?export=download&id=176iJckVsdumU_Y6lMIS3Pofh-BYrB2TJ"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                px: { xs: 2, sm: 4 },
                py: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                letterSpacing: '0.1em',
                minWidth: { xs: '100%', sm: 200 },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              DOWNLOAD CV
            </Button>

            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/contact')}
              sx={{ 
                px: { xs: 2, sm: 4 },
                py: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                letterSpacing: '0.1em',
                minWidth: { xs: '100%', sm: 200 },
                width: { xs: '100%', sm: 'auto' },
                borderWidth: 2,
              }}
            >
              CONTACT ME
            </Button>
          </Stack>
        </MotionBox>
        
        {/* Expertise Section */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          sx={{ mb: 8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            EXPERTISE
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  p: 4,
                  border: '1px solid #fff',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  MACHINE LEARNING
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    opacity: 0.8,
                    lineHeight: 1.8,
                  }}
                >
                  YOLOv5, TensorFlow, OpenCV, Scikit-learn, NLP
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  p: 4,
                  border: '1px solid #fff ',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  FULL-STACK Development
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    opacity: 0.8,
                    lineHeight: 1.8,
                  }}
                >
                  React, Next.js, Node.js, Python, Flask, Firebase, TypeScript
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  p: 4,
                  border: '1px solid #fff',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  GAME DEVELOPMENT
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    opacity: 0.8,
                    lineHeight: 1.8,
                  }}
                >
                  Unity, C#, Real-time Systems, Computer Vision Integration
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MotionBox>
        
        {/* Featured Projects Section */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              FEATURED PROJECTS
            </Typography>
            
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/projects')}
              sx={{ 
                px: 4, 
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                borderWidth: 2,
              }}
            >
              VIEW ALL
            </Button>
          </Box>
          
          <Grid container spacing={4}>
            {projects.filter(project => project.featured).slice(0, 3).map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Box 
                  sx={{ 
                    height: 300,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    }
                  }}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Box>
    </>
  );
};

export default ProfilePage;
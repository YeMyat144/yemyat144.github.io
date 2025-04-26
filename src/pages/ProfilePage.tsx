import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper,
  useTheme, 
  Divider,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const ProfilePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  return (
    <>
    <Helmet>  
      <title>Ye Myat Moe | Profile</title>
    </Helmet>
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 3 }}
      >
        <Box
          sx={{
            position: 'relative',
            height: { xs: 200, md: 250 },
            borderRadius: theme.shape.borderRadius * 2,
            overflow: 'hidden',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box
            component="img"
            src='https://i.imgur.com/cnJpjzp.png'
            alt="Cover"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85)',
            }}
          />

        </Box>

        <Box sx={{ pl: { xs: 2, md: 4 } }}>
          
          
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Download />}
            component="a"
            href="https://drive.google.com/uc?export=download&id=1AuFORPYO4cWV2h0i72ZTM26Rx-k9OK8Z"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              px: 3, 
              py: 1.2,
              borderRadius: theme.shape.borderRadius * 1,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)'
              }
            }}
          >
            Download CV
          </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/contact')}
              sx={{ 
                px: 3, 
                py: 1.2,
                borderRadius: theme.shape.borderRadius * 1,
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'translateY(-3px)'
                }
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </MotionBox>
      
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={3}
        sx={{ mb: 6 }}
      >
        <MotionPaper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{ 
            p: 3, 
            flex: 1,
            borderRadius: theme.shape.borderRadius * 1.5,
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            About Me
          </Typography>
          
          <Typography variant="body1" paragraph>
            I am a Full Stack Developer. I enjoy solving problems by making simple solutions. I focus on good design and write clean code. I build apps that help people.
          </Typography>
          
          <Button
            variant="text"
            color="primary"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/about')}
            sx={{ mt: 1 }}
          >
            Learn more
          </Button>
        </MotionPaper>
        
        <MotionPaper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{ 
            p: 3, 
            flex: 1,
            borderRadius: theme.shape.borderRadius * 1.5,
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            My Expertise
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" fontWeight={600}>
              Front-end Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              React, TypeScript, Next.js, Material UI
            </Typography>
          </Box>
          
          <Divider sx={{ my: 1.5 }} />
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" fontWeight={600}>
              Back-end Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Node.js, Express, MongoDB, PostgreSQL
            </Typography>
          </Box>
          
          <Divider sx={{ my: 1.5 }} />
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" fontWeight={600}>
              UI/UX Design
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Figma, Behance, Responsive Design
            </Typography>
          </Box>
        </MotionPaper>
      </Stack>
      
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        sx={{ 
          p: 3, 
          borderRadius: theme.shape.borderRadius * 1.5,
          mb: 6
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            Featured Projects
          </Typography>
          
          <Button
            variant="text"
            color="primary"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/projects')}
          >
            View all projects
          </Button>
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3
          }}
        >
          <Box 
            sx={{ 
              flex: 1, 
              borderRadius: theme.shape.borderRadius,
              overflow: 'hidden',
              position: 'relative',
              height: 200,
              '&:hover img': {
                transform: 'scale(1.05)',
              },
              '&:hover .overlay': {
                opacity: 1,
              }
            }}
          >
            <Box 
              component="img"
              src="https://i.imgur.com/xBrxQ00.png"
              alt="Samsarent"
              sx={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
            />
            <Box 
              className="overlay"
              sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                p: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>Samsarent</Typography>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => navigate('/projects')}
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                View Details
              </Button>
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              flex: 1, 
              borderRadius: theme.shape.borderRadius,
              overflow: 'hidden',
              position: 'relative',
              height: 200,
              '&:hover img': {
                transform: 'scale(1.05)',
              },
              '&:hover .overlay': {
                opacity: 1,
              }
            }}
          >
            <Box 
              component="img"
              src="https://i.imgur.com/0kFRXUZ.png"
              alt="NarrateNow"
              sx={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
            />
            <Box 
              className="overlay"
              sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                p: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>NarrateNow</Typography>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => navigate('/projects')}
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                View Details
              </Button>
            </Box>
          </Box>
        </Box>
      </MotionPaper>
    </Box>
    </>
  );
};

export default ProfilePage;
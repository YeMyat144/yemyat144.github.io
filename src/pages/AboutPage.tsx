import React from 'react';
import { 
  Box, 
  Typography, 
  Divider,
  useTheme, 
  Stack,
} from '@mui/material';
import { Helmet } from 'react-helmet';

const AboutPage: React.FC = () => {
  const theme = useTheme();
  
  return (
    <>
    <Helmet>
      <title>Ye Myat Moe | About</title>
    </Helmet>
    <Box sx={{ maxWidth: 1200, mx: 'auto',p: 4, }}>
      <Stack spacing={4}>
        {/* Who I Am Section */}
        
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3
            }}
          >
            Who I Am
          </Typography>
          
          <Typography variant="body1" paragraph>
            I am a full-stack developer with hands-on experience in building modern web applications using React, Next.js, and Node.js. I'm passionate about real-time systems, machine learning, and creating scalable, user-friendly solutions. I have a strong background in frontend development, backend integration, data processing, and ML/NLP dashboard design.
          </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Skills Section */}
        
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3
            }}
          >
            Skills
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Frontend Development
              </Typography>
              <Typography variant="body2" color="secondary">
                React, Next.js, Vue.js, Redux, Tailwind CSS, Bootstrap, Material UI
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Backend Development
              </Typography>
              <Typography variant="body2" color="secondary">
                Node.js, Express.js, MongoDB, Firebase, Supabase, PostgreSQL
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                UI/UX Design
              </Typography>
              <Typography variant="body2" color="secondary">
                Figma, Behance, Responsive Design
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Machine Learning & NLP
              </Typography>
              <Typography variant="body2" color="secondary">
                Python, TensorFlow, PyTorch, NLTK, Scikit-learn
              </Typography>
            </Box>

          </Box>

          <Divider sx={{ my: 3 }} />
        

        {/* Education Section */}
        
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3
            }}
          >
            Education 
          </Typography>
          
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Bachelor of Computer Science
            </Typography>
            <Typography variant="body2" color="secondary" gutterBottom>
              Assumption University of Thailand • 2022 - Present
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />
        

        {/* Certificates Section */}
       
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3
            }}
          >
            Certificates
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box>
              <Typography variant="body1" fontWeight={600}>
                AWS Cloud Foundation
              </Typography>
              <Typography variant="body2" color="secondary">
                Amazon Web Services • 2023
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Management Skills
              </Typography>
              <Typography variant="body2" color="secondary">
                Parami University, Yangon • 2021
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 3 }} />
        
      </Stack>
    </Box>
    </>
  );
};

export default AboutPage;

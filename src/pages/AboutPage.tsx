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
            Professional Summary
          </Typography>
          
          <Typography variant="body1" paragraph>
            I'm a Computer Science undergraduate with a strong interest in solving real-world challenges through technology. I’ve had hands-on experience in areas like machine learning, NLP, and full-stack development. My interests lean toward real-time systems and computer vision, and I enjoy working on data-driven projects that make an impact. Whether I’m building an application or experimenting with AI models, I’m always focused on creating meaningful and functional solutions.
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
                Languages & Frameworks
              </Typography>
              <Typography variant="body2" color="secondary">
                Python, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, C#
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                ML & CV Tools
              </Typography>
              <Typography variant="body2" color="secondary">
                YOLOv5, Scikit-learn, OpenCV, NLTK, spaCy, TensorFlow, PyTorch
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Databases
              </Typography>
              <Typography variant="body2" color="secondary">
                MongoDB, Firestore, PostgreSQL
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Tools & Platforms
              </Typography>
              <Typography variant="body2" color="secondary">
                Git, WebSocket, Flask, Streamlit, Unity, Supabase, Vercel, Firebase, Docker
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Others
              </Typography>
              <Typography variant="body2" color="secondary">
                Tailwind CSS, Material UI (MUI), NLP, Resume Parsing, Game Development, Responsive Design
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
              Assumption University of Thailand • June 2022 - Present
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
                Amazon Web Services • September 20, 2023
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Management Skills
              </Typography>
              <Typography variant="body2" color="secondary">
                Parami University, Yangon • October 8, 2021
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

        {/* Languages Section */}
        
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
            Languages
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box>
              <Typography variant="body1" fontWeight={600}>
                English
              </Typography>
              <Typography variant="body2" color="secondary">
                Proficient
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight={600}>
                Burmese
              </Typography>
              <Typography variant="body2" color="secondary">
                Native
              </Typography>
            </Box>
          </Box>
        
      </Stack>
    </Box>
    </>
  );
};

export default AboutPage;

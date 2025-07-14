import React, { useState, useCallback, useEffect } from 'react';
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
  const [enlargedImgSrc, setEnlargedImgSrc] = useState<string | null>(null);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setEnlargedImgSrc(null);
  }, []);

  useEffect(() => {
    if (enlargedImgSrc) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [enlargedImgSrc, handleKeyDown]);
  
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

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* AWS Certificate */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'center' }, position: 'relative' }}>
              <Box 
                sx={{ 
                  width: { xs: '100%', md: 200 }, 
                  height: { xs: 150, md: 120 },
                  borderRadius: theme.shape.borderRadius,
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => setEnlargedImgSrc('https://i.ibb.co/HL5QcYPV/aws.png')}
                title="Click to enlarge"
              >
                <Box 
                  component="img"
                  src="https://i.ibb.co/HL5QcYPV/aws.png"
                  alt="AWS Cloud Foundation Certificate"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={600}>
                  AWS Academy Graduate - AWS Academy Cloud Foundations
                </Typography>
                <Typography variant="body2" color="secondary" gutterBottom>
                  Amazon Web Services • September 20, 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completed comprehensive cloud computing fundamentals course covering AWS services, 
                  security, architecture, and best practices for cloud deployment and management.
                </Typography>
              </Box>
            </Box>

            {/* Unity Certificate */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'center' }, position: 'relative' }}>
              <Box 
                sx={{ 
                  width: { xs: '100%', md: 200 }, 
                  height: { xs: 150, md: 120 },
                  borderRadius: theme.shape.borderRadius,
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => setEnlargedImgSrc('https://i.ibb.co/qFNZRFrc/unity.png')}
                title="Click to enlarge"
              >
                <Box 
                  component="img"
                  src="https://i.ibb.co/qFNZRFrc/unity.png"
                  alt="Unity Essentials Pathway Certificate"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={600}>
                  Unity Essentials Pathway
                </Typography>
                <Typography variant="body2" color="secondary" gutterBottom>
                  Unity Technologies • June 30, 2025
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mastered Unity game development fundamentals including scripting, physics, 
                  animation, and project management for creating interactive 3D applications.
                </Typography>
              </Box>
            </Box>

            {/* Management Certificate */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'center' }, position: 'relative' }}>
              <Box 
                sx={{ 
                  width: { xs: '100%', md: 200 }, 
                  height: { xs: 150, md: 120 },
                  borderRadius: theme.shape.borderRadius,
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => setEnlargedImgSrc('https://i.ibb.co/ycXRdPHg/Screenshot-2025-07-15-012954.png')}
                title="Click to enlarge"
              >
                <Box 
                  component="img"
                  src="https://i.ibb.co/ycXRdPHg/Screenshot-2025-07-15-012954.png"
                  alt="Parami Management Skills Certificate"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={600}>
                  Management Skills
                </Typography>
                <Typography variant="body2" color="secondary" gutterBottom>
                  Parami University, Yangon • October 8, 2021
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developed essential management and leadership skills including team coordination, 
                  project planning, communication strategies, and organizational development.
                </Typography>
              </Box>
            </Box>

            {/* Physics behind Internet*/}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'center' }, position: 'relative' }}>
              <Box 
                sx={{ 
                  width: { xs: '100%', md: 200 }, 
                  height: { xs: 150, md: 120 },
                  borderRadius: theme.shape.borderRadius,
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => setEnlargedImgSrc('https://i.ibb.co/sd3JWmzq/parami.png')}
                title="Click to enlarge"
              >
                <Box 
                  component="img"
                  src="https://i.ibb.co/sd3JWmzq/parami.png"
                  alt="Physics behind Internet Certificate"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={600}>
                  Physics behind Internet
                </Typography>
                <Typography variant="body2" color="secondary" gutterBottom>
                  Parami University, Yangon • October 8, 2021
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explored the physical principles underlying internet technologies including data transmission, 
                  network protocols, and the impact of physics on modern communication systems.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Modal overlay for enlarged image */}
          {enlargedImgSrc && (
            <Box
              onClick={() => setEnlargedImgSrc(null)}
              sx={{
                position: 'fixed',
                top: -32,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: 'rgba(0,0,0,0.8)',
                zIndex: 1300,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Box
                component="img"
                src={enlargedImgSrc}
                alt="Enlarged certificate"
                sx={{
                  maxWidth: { xs: '90vw', md: 600 },
                  maxHeight: { xs: '70vh', md: 600 },
                  borderRadius: 2,
                  boxShadow: 8,
                  background: '#fff',
                }}
                onClick={e => e.stopPropagation()}
              />
            </Box>
          )}

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

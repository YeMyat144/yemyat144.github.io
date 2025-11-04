import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  useTheme,
  Link,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { projects } from '../data/projects';

const MotionBox = motion(Box);

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
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
            SOFTWARE ENGINEER
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
            I’m a passionate Software Engineer with a strong background in Computer Science. I enjoy solving real-world problems through technology. 
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
              href="https://drive.google.com/uc?export=download&id=1QYWyrrZg_jUvFxSDDDJ2H8--1-Fr9aOk"
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
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4, }}>
          <Stack spacing={3}>


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
                <Typography variant="body2" >
                  Python, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, Angular.js, C#, .NET
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" fontWeight={600}>
                  ML & CV Tools
                </Typography>
                <Typography variant="body2" >
                  TensorFlow, PyTorch, OpenCV, Scikit-learn, YOLOv5
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Databases
                </Typography>
                <Typography variant="body2" >
                  MongoDB, Firestore, PostgreSQL
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Tools & Platforms
                </Typography>
                <Typography variant="body2" >
                  Git, WebSocket, Flask, Streamlit, Unity, Supabase, Vercel, Firebase, Docker
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Soft Skills
                </Typography>
                <Typography variant="body2" >
                  Problem-Solving, Team Collaboration, Adaptability, Communication, Project Management
                </Typography>
              </Box>

            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Experience Section */}
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 3,
              }}
            >
              Experience
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: { xs: 'center', sm: 'flex-start' }, // center on mobile
                  flexDirection: { xs: 'column', sm: 'row' }, // column on mobile, row on larger screens
                  textAlign: { xs: 'center', sm: 'left' }, // center text on mobile
                }}
              >
                {/* Company Logo */}
                <Box
                  component="img"
                  src="logos/sumo.png"
                  sx={{ width: 200 }}
                />

                {/* Job Info */}
                <Box>
                  <Typography variant="body1" fontWeight={600}>
                    Software Engineer
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <Link href="https://foodloft.me" target="_blank" rel="noopener noreferrer" underline="hover">
                      foodloft.me
                    </Link>
                    {" • July 2025 – October 2025"}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Thailand • Contract
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Built a SaaS restaurant management platform featuring interactive 3D floor planning. Developed advanced booking system implementing LINE bot integration, optimistic concurrency control and and dual payment processing.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: { xs: 'center', sm: 'flex-start' }, // center on mobile
                  flexDirection: { xs: 'column', sm: 'row' }, // column on mobile, row on larger screens
                  textAlign: { xs: 'center', sm: 'left' }, // center text on mobile
                }}
              >
                {/* Company Logo */}
                <Box
                  component="img"
                  src="logos/netmonitoring.png"
                  sx={{ width: 200 }}
                />

                {/* Job Info */}
                <Box>
                  <Typography variant="body1" fontWeight={600}>
                    WordPress Developer
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <Link href="https://NetMonitoringTech.com" target="_blank" rel="noopener noreferrer" underline="hover">
                      NetMonitoringTech.com
                    </Link>
                    {" • August 2025 – September 2025"}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    United States • Remote
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Collaborated on a 3-week live project NetMonitoringTech.com, a platform focused on network performance
                    monitoring and diagnostics. Built and formatted web pages using WordPress and Elementor
                  </Typography>
                </Box>
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
              <Typography variant="body2" gutterBottom>
                Assumption University of Thailand • June 2022 - Oct 2025
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
              {/* Foundation C# wiht Microsoft */}
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
                  onClick={() => setEnlargedImgSrc('certificates/microsoft.png')}
                  title="Click to enlarge"
                >
                  <Box
                    component="img"
                    src="certificates/microsoft.png"
                    alt="Foundation C# with Microsoft Certificate"
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
                    Foundation C# with Microsoft
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Microsoft • July 31, 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gained foundational knowledge in C# programming language, covering syntax, data structures,
                    and object-oriented programming principles.
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
                  onClick={() => setEnlargedImgSrc('certificates/unity.png')}
                  title="Click to enlarge"
                >
                  <Box
                    component="img"
                    src="certificates/unity.png"
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
                  <Typography variant="body2" gutterBottom>
                    Unity Technologies • June 30, 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mastered Unity game development fundamentals including scripting, physics,
                    animation, and project management for creating interactive 3D applications.
                  </Typography>
                </Box>
              </Box>

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
                  onClick={() => setEnlargedImgSrc('certificates/aws.png')}
                  title="Click to enlarge"
                >
                  <Box
                    component="img"
                    src="certificates/aws.png"
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
                  <Typography variant="body2" gutterBottom>
                    Amazon Web Services • September 20, 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Completed comprehensive cloud computing fundamentals course covering AWS services,
                    security, architecture, and best practices for cloud deployment and management.
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
                  onClick={() => setEnlargedImgSrc('certificates/parami.png')}
                  title="Click to enlarge"
                >
                  <Box
                    component="img"
                    src="certificates/parami.png"
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
                  <Typography variant="body2" gutterBottom>
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
                  onClick={() => setEnlargedImgSrc('certificates/physics.png')}
                  title="Click to enlarge"
                >
                  <Box
                    component="img"
                    src="certificates/physics.png"
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
                  <Typography variant="body2" gutterBottom>
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
                <Typography variant="body2" >
                  Proficient
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Burmese
                </Typography>
                <Typography variant="body2" >
                  Native
                </Typography>
              </Box>
            </Box>

          </Stack>
        </Box>



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
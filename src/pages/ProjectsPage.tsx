import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { GitHub, Language, YouTube } from '@mui/icons-material';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Ye Myat Moe | Projects</title>
      </Helmet>
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 3 }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            A collection of my work
          </Typography>


        </MotionBox>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 5,
        }}>
          {projects.map((project, index) => (
            <MotionBox
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/projects/${project.slug}`)}
              sx={{
                position: 'relative',
                height: { xs: 200, md: 300 },
                overflow: 'hidden',
                borderRadius: theme.shape.borderRadius * 2,
                cursor: 'pointer',
                '&:hover .project-content': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
              />

              <Box
                className="project-content"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.80)',
                  color: 'white',
                  p: 3,
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'all 0.4s ease',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.light,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    opacity: 0.9,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </Typography>

                <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.techStack.map((tech) => (
                    <Typography
                      key={tech}
                      variant="caption"
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        bgcolor: `${theme.palette.primary.main}40`,
                        borderRadius: 20,
                        color: theme.palette.primary.light,
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                  <Box
                    component="a"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: theme.palette.primary.light,
                      }
                    }}
                  >
                    <GitHub fontSize="small" />
                    <Typography variant="body2" fontWeight={500}>
                      Repository
                    </Typography>
                  </Box>

                  {project.liveLink && (
                    <Box
                      component="a"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: theme.palette.primary.light,
                        }
                      }}
                    >
                      <Language sx={{fontSize: 22}} />
                      <Typography variant="body2" fontWeight={500}>
                        Live
                      </Typography>
                    </Box>
                  )}
                  {project.youtubeLink && (
                    <Box
                      component="a"
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: theme.palette.primary.light,
                        }
                      }}
                    >
                      <YouTube sx={{ color: 'inherit', fontSize: 27 }} />
                      <Typography variant="body2" fontWeight={500}>
                        Demo
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectsPage;
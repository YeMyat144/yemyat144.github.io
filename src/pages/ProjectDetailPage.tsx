import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  useTheme, 
  Button, 
  Chip,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { YouTube, GitHub, Language } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const MotionBox = motion(Box);

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const project = projects.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" gutterBottom>Project Not Found</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/projects')}
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back to Projects
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ position: 'relative', mb: 4 }}>
          <IconButton
            onClick={() => navigate('/projects')}
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bgcolor: 'background.paper',
              boxShadow: theme.shadows[2],
              '&:hover': { bgcolor: 'background.paper' }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          
          <Typography 
            variant="h3" 
            component="h1" 
            align="center"
            sx={{ 
              fontWeight: 800,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            {project.title}
          </Typography>
          
        </Box>

        <Box 
          sx={{ 
            position: 'relative',
            height: { xs: 300, md: 500 },
            mb: 4,
            borderRadius: theme.shape.borderRadius * 2,
            overflow: 'hidden',
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
              borderRadius: theme.shape.borderRadius * 2,
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHub />}
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderRadius: 2 }}
            >
              Repo
            </Button>
            {project.liveLink && (
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Language />}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: 2 }}
              >
                Live
              </Button>
            )}
            {/* youtube demo */}
            {project.youtubeLink && (
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<YouTube />}
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: 2 }}
              >
                Demo
              </Button>
            )}
          </Box>

        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            Project Overview
          </Typography>
          {project.longDescription && (
            <Typography variant="body1" paragraph>
              {project.longDescription}
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  bgcolor: `${theme.palette.secondary.main}15`,
                  color: theme.palette.secondary.dark,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Box>

        {project.features && (
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h5" 
              component="h2"
              sx={{ 
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 2
              }}
            >
              Key Features
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              {project.features.map((feature, index) => (
                <Typography 
                  key={index} 
                  component="li" 
                  variant="body1" 
                  sx={{ mb: 1 }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
      </MotionBox>
    </Box>
  );
}

export default ProjectDetailPage;
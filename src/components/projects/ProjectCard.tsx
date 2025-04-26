import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Button, 
  useTheme 
} from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Project } from '../../types';

const MotionCard = motion(Card);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const theme = useTheme();
  
  return (
    <MotionCard
      whileHover={{ 
        y: -8,
        boxShadow: 'none',
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            mb: 2,
            color: theme.palette.primary.main
          }}
        >
          {project.title}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        
        <Box sx={{ my: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.techStack.map((tech, index) => (
            <Chip 
              key={index} 
              label={tech} 
              size="small" 
              variant="outlined"
              sx={{ 
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.dark
              }} 
            />
          ))}
        </Box>
        
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button 
            startIcon={<GitHub />} 
            variant="outlined" 
            color="secondary" 
            size="small"
            sx={{
              borderRadius: theme.shape.borderRadius * 10,
            }}
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </Button>
          
          {project.liveLink && (
            <Button 
              startIcon={<Language />} 
              variant="contained" 
              color="primary" 
              sx={{
                borderRadius: theme.shape.borderRadius * 10,
              }}
              size="small"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
          )}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default ProjectCard;
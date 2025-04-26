import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Button, 
} from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid #f0f0f0',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.12)'
  }
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: '20px',
  padding: '8px 16px',
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'none',
  letterSpacing: '0.5px',
  transition: 'all 0.2s ease',
}));

const MotionCard = motion(StyledCard);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  
  return (
    <MotionCard
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ 
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      />
      
      <CardContent sx={{ 
        flexGrow: 1, 
        p: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#2d3748',
            margin: 0
          }}
        >
          {project.title}
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: '#4a5568',
          lineHeight: 1.6,
          fontSize: '0.95rem'
        }}>
          {project.description}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          my: '12px'
        }}>
          {project.techStack.map((tech, index) => (
            <Chip 
              key={index} 
              label={tech} 
              size="small" 
              sx={{ 
                borderRadius: '12px',
                backgroundColor: '#edf2f7',
                color: '#2d3748',
                border: '1px solid #e2e8f0',
                fontSize: '0.7rem',
                height: '24px'
              }} 
            />
          ))}
        </Box>
        
        <Box sx={{ 
          mt: 'auto',
          display: 'flex', 
          gap: '12px',
          pt: '8px'
        }}>
          <StyledButton 
            startIcon={<GitHub sx={{ fontSize: '18px' }} />} 
            variant="outlined" 
            sx={{
              color: '#4a5568',
              borderColor: '#e2e8f0',
              backgroundColor: '#ffffff',
              '&:hover': {
                backgroundColor: '#f7fafc',
                borderColor: '#cbd5e0'
              }
            }}
            href={project.repoLink}
            rel="noopener noreferrer"
          >
            Repository
          </StyledButton>
          
          {project.liveLink && (
            <StyledButton 
              startIcon={<Language sx={{ fontSize: '18px' }} />} 
              variant="contained" 
              sx={{
                color: 'white',
                backgroundColor: '#4299e1',
                '&:hover': {
                  backgroundColor: '#3182ce'
                }
              }}
              href={project.liveLink}
              rel="noopener noreferrer"
            >
              Live Demo
            </StyledButton>
          )}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default ProjectCard;
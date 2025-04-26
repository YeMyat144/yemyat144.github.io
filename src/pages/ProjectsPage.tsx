import React from 'react';
import { Box, Grid } from '@mui/material';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet';

const ProjectsPage: React.FC = () => {

  
  return (
    <>
    <Helmet>
      <title>Ye Myat Moe | Projects</title>
    </Helmet>
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      
      
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default ProjectsPage;
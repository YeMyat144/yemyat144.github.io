import { Box, Grid, Card, CardContent, CardMedia, Typography,Paper, Button, CardActions } from '@mui/material'
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material'
import { Helmet } from 'react-helmet'

const projects = [
  {
    title: 'Algovithm',
    description: 'A website for visualizing sorting and pathfinding algorithms',
    image: 'https://i.ibb.co/mF0xyxtF/Screenshot-2025-04-08-120404.png',
    repoUrl: 'https://github.com/YeMyat144/algovithm',
    liveUrl: 'https://algovithm.vercel.app/',
  },
  {
    title: 'Ticket Tango',
    description: 'An online system for booking cinema tickets (JuzBird, M3)',
    image: 'https://i.ibb.co/HD8hkv2s/2.png',
    repoUrl: 'https://github.com/MyoMyatMin/ticket-tango',
    liveUrl: 'https://ticket-tango.vercel.app/',
  },
  {
    title: 'Fit Memo',
    description: 'A fitness web app that user can track their exercises',
    image: 'https://i.ibb.co/4nHMXKqY/3.png',
    repoUrl: 'https://github.com/YeMyat144/fitmemo-frontend',
    liveUrl: 'https://fitmemo.vercel.app/',
  },
  {
    title: 'NarutoNote',
    description: 'A website featuring content on one of my favorite anime series',
    image: 'https://i.ibb.co/vvsQnw1x/Screenshot-2025-04-08-122905.png',
    repoUrl: 'https://github.com/YeMyat144/naruto-note',
    liveUrl: 'https://narutonote.vercel.app/',
  },
  {
    title: 'Tale&Twist',
    description: 'Branching narratives where user choices influence the outcome',
    image: 'https://i.ibb.co/KTbF92x/1.png',
    repoUrl: 'https://github.com/YeMyat144/talentwist',
    liveUrl: 'https://talentwist.vercel.app/',
  },
  {
    title: 'Gomma',
    description: 'A remove background web app using removebg api',
    image: 'https://i.ibb.co/ymN90kd2/4.png',
    repoUrl: 'https://github.com/YeMyat144/gomma',
    liveUrl: 'https://gomma.vercel.app/',
  },
  {
    title: 'Hue Seek',
    description: 'A finding color code web app that user can search by hovering',
    image: 'https://i.ibb.co/gLJ0b7R0/5.png',
    repoUrl: 'https://github.com/YeMyat144/hueseek',
    liveUrl: 'https://hueseek.vercel.app/',
  }

]

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Ye Myat | Projects</title>
      </Helmet>
    <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 6 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 6, 
          borderRadius: 2,
          background: 'linear-gradient(145deg, rgba(15, 39, 68, 0.7) 0%, rgba(10, 25, 41, 0.7) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ mb: 4, color: 'primary.light' }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'linear-gradient(145deg, rgba(15, 39, 68, 0.7) 0%, rgba(10, 25, 41, 0.7) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={project.image}
                alt={project.title}
                sx={{ 
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography gutterBottom variant="h5" sx={{ color: 'primary.light' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.repoUrl}
                  target="_blank"
                  sx={{ 
                    mr: 2,
                    borderRadius: 1,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(100, 181, 246, 0.08)',
                    },
                  }}
                >
                  Repo
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<LaunchIcon />}
                  href={project.liveUrl}
                  target="_blank"
                  sx={{
                    borderRadius: 1,
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Live
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHubIcon />}
          href="https://github.com/YeMyat144"
          target="_blank"
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'rgba(100, 181, 246, 0.08)',
            },
          }}
        >
          View More
        </Button>
      </Box>
      </Paper>
    </Box>
    </>
  )
}
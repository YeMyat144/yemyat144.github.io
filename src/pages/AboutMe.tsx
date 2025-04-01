import { Box, Typography, Paper, Grid, Button } from '@mui/material'
import { Download as DownloadIcon } from '@mui/icons-material'
import { Helmet } from 'react-helmet'

export default function AboutMe() {
  return (
    <>
      <Helmet>
        <title>Ye Myat | About Me</title>
      </Helmet>
      <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 4,
            background: 'linear-gradient(145deg, rgba(15, 39, 68, 0.7) 0%, rgba(10, 25, 41, 0.7) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.light' }}>
            About Me
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
            Hello! I am a Full Stack Developer. I enjoy solving problems by making simple solutions. I focus on good design and write clean code. I build apps that help people.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
                Technical Skills
              </Typography>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <Typography component="div" sx={{ mb: 1 }}>
                  • Frontend: React, TypeScript, JavaScript
                </Typography>
                <Typography component="div" sx={{ mb: 1 }}>
                  • Backend: Node.js, Express, MongoDB
                </Typography>
                <Typography component="div">• Tools: Git, Docker, AWS</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
                Soft Skills
              </Typography>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <Typography component="div" sx={{ mb: 1 }}>
                  • Problem-Solving & Thinking Clearly
                </Typography>
                <Typography component="div" sx={{ mb: 1 }}>
                  • Working Well with a Team
                </Typography>
                <Typography component="div">• Managing Projects & Leading</Typography>
              </Box>
            </Grid>
            <Box sx={{ p: 3 }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download
                fullWidth
                sx={{
                  backgroundColor: 'primary.dark',
                  color: '#fff',
                  fontWeight: 500,
                  borderRadius: 1,
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: 'primary.main',
                  },
                }}
              >
                 Resume
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

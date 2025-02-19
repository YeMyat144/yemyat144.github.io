import { Box, Grid, Card, CardContent, CardMedia, Typography,Paper, Button, CardActions } from '@mui/material'
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material'

const projects = [
  {
    title: 'Tale&Twist',
    description: 'Branching narratives where user choices influence the outcome',
    image: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/480141005_1845845629585337_3432623810899661845_n.png?stp=dst-png_s720x720&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=5JZMMkhwwIcQ7kNvgHCg_jV&_nc_oc=Adjn_sIWNUO3LoqB3bc23Y9oH7v64mtngMr57RU9_we4y8XWPBlCU5cDTYhmNBZZiG0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&oh=03_Q7cD1gH33WobKACZPHbRo3TzbAB2SUNbKx66lRb8lxFcNGCGCw&oe=67DDAD87',
    repoUrl: 'https://github.com/YeMyat144/talentwist',
    liveUrl: 'https://talentwist.vercel.app/',
  },
  {
    title: 'Ticket Tango',
    description: 'An online system for booking cinema tickets (JuzBird, M3)',
    image: 'https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/480769017_645939787889016_2340672976087358275_n.png?stp=dst-png_p851x315&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xlHBHUu3Xf8Q7kNvgG1a2sK&_nc_oc=Adi2c4BTAyW_9NBgbYmLO0H4KdKBKRWQzdGITzlIRCmLBr7UVh8tghYQ-VLJrevDw3E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&oh=03_Q7cD1gE2_jQzOdMIISmzXcrGmu-NAeFoeASkmwoAxJDMWiAxlA&oe=67DDAC28',
    repoUrl: 'https://github.com/MyoMyatMin/ticket-tango',
    liveUrl: 'https://ticket-tango.vercel.app/',
  },
  {
    title: 'Gomma',
    description: 'A remove background web app using removebg api',
    image: 'https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.15752-9/476739226_529161759657582_2761152525145965019_n.png?stp=dst-png_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Fupe-ywef7UQ7kNvgHgj8UV&_nc_oc=AdgLi04W6bi_LQAYTXexdIQ4UiGFxxIpNCcNxjwn2FhhVwXrfFmk8Vlozphvl0d_d7c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&oh=03_Q7cD1gGZYRnRpxUo17NWUC5W-5GFrfJehSxwWCH4ci_d3ptSfw&oe=67DDA178',
    repoUrl: 'https://github.com/YeMyat144/gomma',
    liveUrl: 'https://gomma.vercel.app/',
  },
  {
    title: 'HueSeek',
    description: 'A finding color code web app that user can search by hovering',
    image: 'https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/477715409_1306043384002754_2534466840343384768_n.png?stp=dst-png_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=G6lsS9P1ypMQ7kNvgEJiPkR&_nc_oc=Adi_8Yek98HIVVV6IFuBedmCop40RVfcsVl-9A1crTzY4gTRR2HxcM5ye8_RbKJXbH8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&oh=03_Q7cD1gFUxO5YnFzDtZnuMHc2pnXtXCp6BkN_uctRYl8ql7RwPg&oe=67DDA1AB',
    repoUrl: 'https://github.com/YeMyat144/hueseek',
    liveUrl: 'https://hueseek.vercel.app/',
  }

]

export default function Projects() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 6 }}>
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
                borderRadius: 4,
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
                  borderRadius: '16px 16px 0 0',
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
                  size="large"
                  startIcon={<GitHubIcon />}
                  href={project.repoUrl}
                  target="_blank"
                  sx={{ 
                    mr: 2,
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
                  size="large"
                  startIcon={<LaunchIcon />}
                  href={project.liveUrl}
                  target="_blank"
                  sx={{
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
  )
}
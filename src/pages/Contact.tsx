import { Box, Typography, Paper, IconButton, Grid } from '@mui/material'
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material'
import { Helmet } from 'react-helmet'

const contacts = [
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    label: 'Email',
    href: 'mailto:yemyatmoe.tetee@gmail.com',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 32 }} />,
    label: 'GitHub',
    href: 'https://github.com/yemyat144',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ye-myat-moe-2a6105230/',
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 32 }} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/yemyat_moe/',
  },
]

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Ye Myat | Contact</title>
      </Helmet>
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 6 }}>
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
          sx={{ mb: 3, color: 'primary.light' }}
        >
          Contact Me
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ mb: 6, fontSize: '1.1rem' }}
        >
          Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
        </Typography>
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ maxWidth: 800, mx: 'auto' }}
        >
          {contacts.map((contact, index) => (
            <Grid item key={index}>
              <Box 
                sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  width: 140,
                }}
              >
                <IconButton
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mb: 1,
                    p: 2,
                    color: 'primary.light',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 181, 246, 0.08)',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  {contact.icon}
                </IconButton>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {contact.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
    </>
  )
}
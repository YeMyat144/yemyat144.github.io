import React from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  YouTube,
} from '@mui/icons-material';
import ContactForm from '../components/contact/ContactForm';
import { Helmet } from 'react-helmet';

const ContactPage: React.FC = () => {
  const theme = useTheme();
  
  return (
    <>
      <Helmet>
        <title>Ye Myat Moe | Contact</title>
      </Helmet>

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 2, sm: 4 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 8 }}
          sx={{
            mb: { xs: 4, md: 6 },
            width: "100%",
          }}
        >
          {/* LEFT SIDE - CONTACT FORM */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              minWidth: 0,
            }}
          >
            <ContactForm />
          </Box>

          {/* RIGHT SIDE - CONTACT INFO */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              minWidth: 0,
              mt: { xs: 1, md: 0 },
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 3,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Contact Information
            </Typography>

            <List disablePadding sx={{ width: "100%" }}>

              {/* EMAIL */}
              <ListItem
                sx={{
                  py: 2,
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={
                    <Typography
                      component="a"
                      href="mailto:yemyatmoe.tetee@gmail.com"
                      color="text.primary"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 500,
                        wordBreak: "break-word",
                        "&:hover": { color: theme.palette.primary.main },
                      }}
                    >
                      yemyatmoe.tetee@gmail.com
                    </Typography>
                  }
                />
              </ListItem>

              {/* PHONE */}
              <ListItem
                sx={{
                  py: 2,
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary={
                    <Typography
                      component="a"
                      href="tel:+66617406702"
                      color="text.primary"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 500,
                        wordBreak: "break-word",
                        "&:hover": { color: theme.palette.primary.main },
                      }}
                    >
                      +66 61-740-6702
                    </Typography>
                  }
                />
              </ListItem>

              {/* LOCATION */}
              <ListItem
                sx={{
                  py: 2,
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LocationIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Location"
                  secondary={
                    <Typography
                      color="text.primary"
                      sx={{
                        fontWeight: 500,
                        wordBreak: "break-word",
                      }}
                    >
                      Bang Bo District, Samut Prakan 10560, Thailand
                    </Typography>
                  }
                />
              </ListItem>

              {/* YOUTUBE */}
              <ListItem
                sx={{
                  py: 2,
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <YouTube />
                </ListItemIcon>
                <ListItemText
                  primary="YouTube"
                  secondary={
                    <Typography
                      color="text.primary"
                      sx={{
                        fontWeight: 500,
                        wordBreak: "break-word",
                      }}
                    >
                      I share my project videos on{" "}
                      <Typography
                        component="a"
                        href="https://www.youtube.com/@yemyatlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="error.main"
                        sx={{
                          fontWeight: 600,
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        my channel
                      </Typography>
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ContactPage;

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
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={8}
        sx={{ mb: 6 }}
      >
        <Box sx={{ flex: 1 }}>
          <ContactForm />
        </Box>
        
        <Box sx={{ flex: 1 }}>
          
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 3
              }}
            >
              Contact Information
            </Typography>
            
            <List disablePadding>
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <EmailIcon color="secondary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Email" 
                  secondary={
                    <Typography 
                      component="a" 
                      href="mailto:yemyatmoe.tetee@gmail.com" 
                      color="text.primary"
                      sx={{ 
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': { color: theme.palette.primary.main }
                      }}
                    >
                      yemyatmoe.tetee@gmail.com
                    </Typography>
                  }
                />
              </ListItem>
              
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <PhoneIcon color="secondary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Phone" 
                  secondary={
                    <Typography 
                      component="a" 
                      href="tel:+1234567890" 
                      color="text.primary"
                      sx={{ 
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': { color: theme.palette.primary.main }
                      }}
                    >
                      +66 6-1740-6702
                    </Typography>
                  }
                />
              </ListItem>
              
              <ListItem sx={{ py: 2 }}>
                <ListItemIcon>
                  <LocationIcon color="secondary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Location" 
                  secondary={
                    <Typography 
                      color="text.primary"
                      sx={{ fontWeight: 500 }}
                    >
                      Samut Prakan, Thailand
                    </Typography>
                  }
                />
              </ListItem>
              
              <ListItem sx={{ py: 2 }}>
  <ListItemIcon>
    <YouTube color="secondary" />
  </ListItemIcon>
  <ListItemText 
    primary="YouTube" 
    secondary={
      <Typography color="text.primary" sx={{ fontWeight: 500 }}>
        I share my project videos on{' '}
        <Typography
          component="a"
          href="https://www.youtube.com/@YeMyat144" 
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{ fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
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
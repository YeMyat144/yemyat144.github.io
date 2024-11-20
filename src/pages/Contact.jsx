import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Snackbar,
  CircularProgress,
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@mui/material';
import { styled } from '@mui/system';
import { Send as SendIcon } from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

let theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
});

theme = responsiveFontSizes(theme);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderRadius: theme.shape.borderRadius,
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_til6i7c', 'template_s9okbkh', form.current, 'ZT3etSjViZ5HA5CJT')
      .then(
        (result) => {
          setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success',
          });
          form.current.reset();
        },
        (error) => {
          setSnackbar({
            open: true,
            message: 'Failed to send message. Please try again later.',
            severity: 'error',
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          bgcolor: 'background.default',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <StyledPaper elevation={3} sx={{  width: '100%', maxWidth: 800,bgcolor: '#f5f5f5' }}>
            <Typography variant="h4" align="center" gutterBottom color="secondary">
              Get in Touch
            </Typography>
            <StyledForm ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
              <TextField
                label="Name"
                name="user_name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="user_email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                startIcon={<SendIcon />}
                disabled={isSubmitting}
              >
                {isSubmitting ? <CircularProgress size={24} /> : 'Send Message'}
              </Button>
            </StyledForm>
          </StyledPaper>
        </Box>
        <Footer />
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbar.message}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default Contact;

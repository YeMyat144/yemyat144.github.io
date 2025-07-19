import React, { useRef, useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  useTheme,
  Snackbar,
  Alert
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ContactFormValues } from '../../types';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required').min(10, 'Message is too short'),
});

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });
  
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (_, { resetForm }) => {
      try {
        if (!formRef.current) return;

        const result = await emailjs.sendForm(
          'service_til6i7c', 
          'template_s9okbkh',
          formRef.current,
          'ZT3etSjViZ5HA5CJT' 
        );

        if (result.text === 'OK') {
          setSnackbar({
            open: true,
            message: 'Message sent successfully! I will get back to you soon.',
            severity: 'success'
          });
          resetForm();
        }
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Failed to send message. Please try again later.',
          severity: 'error'
        });
        console.error('Error sending email:', error);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ 
          fontWeight: 700, 
          mb: 3,
          color: theme.palette.primary.main 
        }}
      >
        Get In Touch
      </Typography>
      
      
      
      <form ref={formRef} onSubmit={formik.handleSubmit}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          
          <TextField
            fullWidth
            id="subject"
            name="subject"
            label="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
          
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            multiline
            rows={6}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Send />}
            disabled={formik.isSubmitting}
            sx={{ 
              borderRadius: theme.shape.borderRadius * 1.5,
              alignSelf: { xs: 'stretch', sm: 'flex-start' },
              mt: 2,
              py: { xs: 1, sm: 1.5 },
              px: { xs: 2, sm: 4 },
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              width: { xs: '100%', sm: 'auto' },
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      </Box>
  );
};

export default ContactForm;
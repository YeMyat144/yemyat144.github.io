import { createTheme } from '@mui/material/styles';

// AJR-inspired color palette
const darkGrey = '#1a1a1a';
const black = '#000000';
const white = '#ffffff';
const accentGreen = '#4CAF50';
const warmOrange = '#FF9800';

// Create the theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: white,
      light: '#f5f5f5',
      dark: '#e0e0e0',
      contrastText: black,
    },
    secondary: {
      main: accentGreen,
      light: '#66bb6a',
      dark: '#388e3c',
      contrastText: white,
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: warmOrange,
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: accentGreen,
    },
    background: {
      default: darkGrey,
      paper: black,
    },
    text: {
      primary: white,
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.1,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          padding: '12px 24px',
          boxShadow: 'none',
          border: '1px solid',
          borderRadius: 0,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-2px)',
            transition: 'transform 0.2s ease',
          },
        },
        contained: {
          backgroundColor: white,
          color: black,
          borderColor: white,
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: '#f5f5f5',
          },
        },
        outlined: {
          borderColor: white,
          color: white,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: white,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: black,
          borderRight: 'none',
        },
      },
    },
  },
});

export default theme;
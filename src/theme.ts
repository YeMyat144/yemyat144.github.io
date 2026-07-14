import { createTheme } from '@mui/material/styles';

const bg = '#fafafa';
const bgSubtle = '#f4f4f5';
const fg = '#09090b';
const muted = '#71717a';
const border = 'rgba(9, 9, 11, 0.08)';
const highlight = '#2563eb';

const display = '"Instrument Serif", Georgia, serif';
const body = '"Inter", system-ui, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: fg, contrastText: bg },
    secondary: { main: highlight, contrastText: '#fff' },
    background: { default: bg, paper: bgSubtle },
    text: { primary: fg, secondary: muted },
    divider: border,
  },
  typography: {
    fontFamily: body,
    h1: {
      fontFamily: display,
      fontWeight: 400,
      fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
      lineHeight: 1.02,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: display,
      fontWeight: 400,
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: body,
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    body1: { fontSize: '1rem', lineHeight: 1.65 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.6, color: muted },
    caption: {
      fontFamily: body,
      fontSize: '0.72rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    button: {
      fontFamily: body,
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: bg, color: fg },
      },
    },
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '10px 18px',
          fontSize: '0.875rem',
          boxShadow: 'none',
          transition: 'transform 160ms ease, background 160ms ease',
          '&:active': { transform: 'scale(0.98)' },
        },
        contained: {
          backgroundColor: fg,
          color: bg,
          '&:hover': { backgroundColor: '#27272a', boxShadow: 'none' },
        },
        outlined: {
          borderColor: 'rgba(9, 9, 11, 0.14)',
          color: fg,
          '&:hover': { backgroundColor: bgSubtle, borderColor: fg },
        },
      },
    },
    MuiIconButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: `1px solid ${border}`,
          transition: 'background 160ms ease, border-color 160ms ease',
          '&:hover': { backgroundColor: bgSubtle, borderColor: 'rgba(9, 9, 11, 0.2)' },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: {
          color: fg,
          textUnderlineOffset: '3px',
          '&:hover': { color: highlight },
        },
      },
    },
  },
});

export default theme;

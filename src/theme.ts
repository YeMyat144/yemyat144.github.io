import { createTheme } from '@mui/material/styles';

// "Field Notes" — editorial paper palette
const paper = '#ECE6D6';        // warm cream background
const paperDeep = '#E3DCC8';    // slightly darker cream for panels
const ink = '#111111';          // near-black for type
const inkSoft = '#3A3A36';      // secondary text
const rule = '#1111111A';       // 10% ink for hairlines
const signal = '#E8361C';       // tomato red accent
const ledger = '#2B3A67';       // faded indigo (rarely used)

const serif = '"Fraunces", "Times New Roman", Georgia, serif';
const sans = '"Space Grotesk", "Inter", system-ui, sans-serif';
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: ink,
      light: inkSoft,
      dark: '#000000',
      contrastText: paper,
    },
    secondary: {
      main: signal,
      light: '#FF6B54',
      dark: '#B42611',
      contrastText: paper,
    },
    error: { main: signal },
    warning: { main: '#C88A00' },
    info: { main: ledger },
    success: { main: '#3F7D3A' },
    background: {
      default: paper,
      paper: paperDeep,
    },
    text: {
      primary: ink,
      secondary: inkSoft,
    },
    divider: rule,
  },
  typography: {
    fontFamily: sans,
    h1: {
      fontFamily: serif,
      fontWeight: 300,
      fontSize: 'clamp(3rem, 10vw, 9rem)',
      lineHeight: 0.9,
      letterSpacing: '-0.03em',
      fontVariationSettings: '"opsz" 144, "SOFT" 50',
    },
    h2: {
      fontFamily: serif,
      fontWeight: 400,
      fontSize: 'clamp(2rem, 6vw, 4.5rem)',
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      fontVariationSettings: '"opsz" 144',
    },
    h3: {
      fontFamily: serif,
      fontWeight: 400,
      fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontFamily: serif,
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: mono,
      fontWeight: 500,
      fontSize: '0.8rem',
      lineHeight: 1.2,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: mono,
      fontWeight: 500,
      fontSize: '0.72rem',
      lineHeight: 1.2,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: serif,
      fontSize: '1.25rem',
      fontStyle: 'italic',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: sans,
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 400,
    },
    body2: {
      fontFamily: sans,
      fontSize: '0.9rem',
      lineHeight: 1.55,
      fontWeight: 400,
      color: inkSoft,
    },
    caption: {
      fontFamily: mono,
      fontSize: '0.72rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: mono,
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    button: {
      fontFamily: mono,
      textTransform: 'uppercase',
      fontWeight: 500,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: paper,
          color: ink,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          fontFamily: mono,
          fontWeight: 500,
          padding: '14px 22px',
          boxShadow: 'none',
          border: `1px solid ${ink}`,
          borderRadius: 999,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: '0.78rem',
          transition: 'transform 140ms ease, background-color 140ms ease, color 140ms ease',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          backgroundColor: ink,
          color: paper,
          borderColor: ink,
          '&:hover': {
            backgroundColor: signal,
            borderColor: signal,
            color: paper,
          },
        },
        outlined: {
          borderColor: ink,
          color: ink,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: ink,
            color: paper,
            borderColor: ink,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: mono,
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          borderRadius: 999,
          border: `1px solid ${ink}`,
          backgroundColor: 'transparent',
          color: ink,
          height: 26,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: `1px solid ${ink}`,
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: rule,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: paper,
          borderRight: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiIconButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          color: ink,
          borderRadius: 999,
          transition: 'transform 140ms ease, color 140ms ease',
          '&:hover': {
            color: signal,
            backgroundColor: 'transparent',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: {
        root: {
          color: ink,
          textUnderlineOffset: '4px',
          textDecorationThickness: '1px',
          transition: 'color 140ms ease',
          '&:hover': { color: signal, textDecoration: 'underline' },
        },
      },
    },
  },
});

export default theme;

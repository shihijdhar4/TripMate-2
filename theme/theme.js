import { createTheme } from '@mui/material/styles';

export const getCustomTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#6366F1',
        light: '#818cf8',
        dark: '#4f46e5',
        contrastText: '#fff',
      },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#0f172a',
        paper: mode === 'light' ? '#ffffff' : '#1e293b',
      },
      text: {
        primary: mode === 'light' ? '#1e293b' : '#f8fafc',
        secondary: mode === 'light' ? '#64748b' : '#94a3b8',
      },
      divider: mode === 'light' ? '#e2e8f0' : '#334155',
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '8px 16px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
          },
          containedPrimary: {
            '&:hover': {
              backgroundColor: '#4f46e5',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: mode === 'light' 
              ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
              : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            border: mode === 'light' ? '1px solid #e2e8f0' : '1px solid #334155',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'light' ? '#ffffff' : '#1e293b',
            borderRight: mode === 'light' ? '1px solid #e2e8f0' : '1px solid #334155',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            color: mode === 'light' ? '#1e293b' : '#f8fafc',
            boxShadow: 'none',
            borderBottom: mode === 'light' ? '1px solid #e2e8f0' : '1px solid #334155',
          },
        },
      },
    },
  });
};

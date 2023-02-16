import { createTheme } from '@mui/material';

export const themes = createTheme({
  palette: {
    primary: {
      main: '#111430',
      yellow: '#FBD062',
      green: '#7AB259',
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          padding: '0.6rem',
        },
      },

      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
  },
});

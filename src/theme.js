import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E362E',
    },
    secondary: {
      main: '#865D36',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    background: {
      default: '#60B5FF',//keep this color
      paper: '#48A6A7',
      form: '#F2EFE9',
    },
    action: {
      hover: '#3F7D58',//keep this color
    }
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#2C3930',//keep this color
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#A27B5C',//keep this color
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF',//keep this color
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,//keep this color
      color: '#2C3930',//keep this color
    },
  },
});

export default theme;
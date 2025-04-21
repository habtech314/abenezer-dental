import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D98324', // Deep navy blue for background
    },
    secondary: {
      main: '#D4AF37', // Warm gold for accents and buttons
    },
    text: {
      primary: '#000000', // White for body text
      secondary: '#F9D342', // Lighter golden yellow for subheadings
      tertailry: '#A76545', // White for headings
    },
    background: {
      default: '#357376', // Deep navy blue for the background
      paper: '#1D4D4F', // Matches the backgroundd
      form: '#E5DFDF', // Lighter golden yellow for form backgrounds
    },
    action: {
      hover: '#F9D342', // Lighter golden yellow for hover effects
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#FFFFFF', // White for headings
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: 'white', // Lighter golden yellow for subheadings
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF', // White for body text
    },
    button: {
      textTransform: 'none', // Disable uppercase for buttons
      fontWeight: 500,
      color: '#FFFFFF', // White text for buttons
    },
  },
});

export default theme;
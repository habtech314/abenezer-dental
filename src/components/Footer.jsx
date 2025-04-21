import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#27548A', // White-gray background
        py: 3, // Vertical padding
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Abenezer Dental
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Professional dental care services in Addis Ababa. Your smile is our priority.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Quick Links
            </Typography>
            <Link
              component={RouterLink}
              to="/services"
              color="text.secondary"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Our Services
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="text.secondary"
              display="block"
              sx={{ mb: 0.5 }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="text.secondary"
              display="block"
              sx={{ mb: 0.5 }}
            >
              Contact Us
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Near Bole Medhanealem, Addis Ababa
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: +251 911 123 456
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: info@abenezerdental.com
            </Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton color="secondary" aria-label="Facebook" component="a" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="Instagram" component="a" href="#">
                <InstagramIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="Twitter" component="a" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="LinkedIn" component="a" href="#">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          © {new Date().getFullYear()} Abenezer Dental. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MotionBox = motion(Box);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will contact you soon!',
      severity: 'success'
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                component="h1"
                variant="h2"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Contact Us
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                We're here to help! Reach out to us with any questions or to schedule an appointment.
              </Typography>

              <Card sx={{ mb: 4 }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          Near Bole Medhanealem, Addis Ababa
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <PhoneIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          +251 911 123 456
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          info@abenezerdental.com
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="body1" gutterBottom>
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            Saturday: 9:00 AM - 2:00 PM
                          </Typography>
                          <Typography variant="body1">
                            Sunday: Closed
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
                         <Box
              sx={{
                width: '100%',
                height: 300,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://www.google.com/maps/place/Abenezer+Specility+Dental+Clinic%2F+%E1%8A%A0%E1%89%A4%E1%8A%94%E1%8B%98%E1%88%AD+%E1%88%8D%E1%8B%A9+%E1%8B%A8%E1%8C%A5%E1%88%AD%E1%88%B5+%E1%88%85%E1%8A%AD%E1%88%9D%E1%8A%93/@8.8768486,38.8067311,16z/data=!4m20!1m13!4m12!1m4!2m2!1d41.8412302!2d9.6190231!4e1!1m6!1m2!1s0x164b792238426e3d:0x20fe2652d065fe19!2zQWJlbmV6ZXIgU3BlY2lsaXR5IERlbnRhbCBDbGluaWMvIOGKoOGJpOGKlOGLmOGIrSDhiI3hi6kg4Yuo4Yyl4Yit4Yi1IOGIheGKreGIneGKkywgVHVsdWRpbXR1IHRvIEFsZW1iYW5rIHJvYWQsIEFkZGlzIEFiYWJh!2m2!1d38.8149441!2d8.8728884!3m5!1s0x164b792238426e3d:0x20fe2652d065fe19!8m2!3d8.8729523!4d38.8149242!16s%2Fg%2F11s0jj6mvh?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abenezer Dental Location"
              />
            </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Send us a Message
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={4}
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        </Grid>

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
      </Container>
    </Box>
  );
}

export default Contact;
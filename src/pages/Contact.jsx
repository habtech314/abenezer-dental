import React, { useState } from 'react'

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
  }


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
  }

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  }

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
                <Box sx={{ mt: 4, width: '100%' }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9036092376317!2d38.81240187415736!3d8.873136291456388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8593b557252f%3A0x510b564290a55c1c!2sAddis%20Abeba%201000!5e0!3m2!1sen!2set!4v1711430545936!5m2!1sen!2set" width="600" height="450" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
              </Card>
            </MotionBox>
          </Grid>
        </Grid>
        <Snackbar
          open={snackbar.open} autoHideDuration={6000}
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
  )
}

export default Contact;
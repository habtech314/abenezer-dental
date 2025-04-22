import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import Slider from "react-slick";
import React from 'react';

const MotionBox = motion(Box);
const sliderImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
];

const MotionCard = motion(Card);

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    image: '/images/general-dentistry.svg'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced cosmetic dental procedures.',
    image: '/images/cosmetic-dentistry.svg'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth.',
    image: '/images/dental-implants.svg'
  }
];

function Home() {

  return (
    <Box sx={{
      mt: '0px',
      bgcolor: 'background.default',
      color: 'text.primary',
      minHeight: '100vh',
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          mt: '64px',
          minHeight: '100vh'
        }}
      >
        {/* Slider */}
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
          arrows={false}
        >
          {sliderImages.map((image, index) => (
            <div key={index}>
              <Box
                sx={{
                  position: 'relative', // Needed for the ::before pseudo-element
                  height: '100vh',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  // Add the ::before pseudo-element for the overlay
                  '&::before': {
                    content: '""', // Required for pseudo-elements
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // Adjust the rgba value for desired transparency
                    // (0, 0, 0, 0.3) is black with 30% opacity
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1, // Ensure overlay is above the image but below text
                  },
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Text Overlay Container */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            zIndex: 10, // Keep overlay above slider image and its ::before overlay
            color: 'white',
            textAlign: 'center',           
            px: { xs: 2, md: 4 },
          }}
        >
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    lineHeight: { xs: 1.2, md: 1.3 },
                  }}
                >
                  Welcome to Abenezer Dental
                </Typography>
                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    color: '#FFFFFF',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    maxWidth: '800px',
                    margin: '0 auto',
                  }}
                >
                  Experience exceptional dental care in the heart of Addis Ababa. Your smile deserves the best.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    bgcolor: 'primary.main',
                     '&:hover': {
                       bgcolor: 'primary.dark',
                     },
                  }}
                >
                  Request Appointment
                </Button>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Our Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Comprehensive dental care tailored to your needs
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
              <Grid item key={service.title} xs={12} sm={6} md={4}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: 2,
                      px: 2,
                      height: 200,
                      objectFit: 'contain'
                    }}
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={RouterLink}
              to="/services"
              variant="outlined"
              size="large"
              color="primary"
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, sm: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
             <Grid item xs={12} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ textAlign: 'center', p: 2 }}
              >
                <Typography variant="h5" gutterBottom>
                  Expert Team
                </Typography>
                <Typography color="text.secondary">
                  Our experienced dental professionals are committed to providing the highest quality care.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{ textAlign: 'center', p: 2 }}
              >
                <Typography variant="h5" gutterBottom>
                  Modern Technology
                </Typography>
                <Typography color="text.secondary">
                  We utilize the latest dental technology to ensure precise and comfortable treatments.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                sx={{ textAlign: 'center', p: 2 }}
              >
                <Typography variant="h5" gutterBottom>
                  Patient-Centered Care
                </Typography>
                <Typography color="text.secondary">
                  Your comfort and satisfaction are our top priorities throughout your dental journey.</Typography>
              </MotionBox>
            </Grid>
          </Grid>
          <Box sx={{ mt: 6, textAlign:'center' }}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0269459892807!2d38.78152667415822!3d9.014313489233773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d6a1b0445d%3A0x8edaa289a4e6a984!2sBole%20Medhane%20Alem%20Church!5e0!3m2!1sen!2set!4v1699535830575!5m2!1sen!2set"
            width="100%"
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}


   
          
export default Home;

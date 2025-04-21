import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental care including routine check-ups, cleanings, fillings, and preventive treatments. We focus on maintaining your oral health and preventing dental issues before they become serious.',
    image: '/images/general-dentistry.svg',
    features: [
      'Dental Check-ups',
      'Professional Cleanings',
      'Cavity Fillings',
      'Root Canal Treatment',
      'Gum Disease Treatment'
    ]
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional teeth whitening services to help you achieve a brighter, more confident smile. We use safe and effective whitening techniques that deliver noticeable results.',
    image: '/images/teeth-whitening.svg',
    features: [
      'Professional In-Office Whitening',
      'Take-Home Whitening Kits',
      'Customized Treatment Plans',
      'Long-lasting Results',
      'Safe and Comfortable Procedures'
    ]
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth that look, feel, and function like natural teeth. Our dental implants are designed to last a lifetime with proper care.',
    image: '/images/dental-implants.svg',
    features: [
      'Single Tooth Implants',
      'Multiple Teeth Implants',
      'Full Arch Replacements',
      'Implant-Supported Dentures',
      'Advanced 3D Planning'
    ]
  },
  {
    title: 'Orthodontics',
    description: 'Comprehensive orthodontic treatments to straighten teeth and correct bite issues. We offer various options suitable for both adults and children.',
    image: '/images/orthodontics.svg',
    features: [
      'Traditional Braces',
      'Clear Aligners',
      'Retainers',
      'Bite Correction',
      'Early Intervention Treatment'
    ]
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of cosmetic dental procedures. We combine artistry with dental expertise to create beautiful, natural-looking results.',
    image: '/images/cosmetic-dentistry.svg',
    features: [
      'Porcelain Veneers',
      'Dental Bonding',
      'Smile Makeovers',
      'Crown and Bridge Work',
      'Gum Contouring'
    ]
  },
  {
    title: 'Emergency Dental Care',
    description: 'Quick and effective treatment for dental emergencies. We provide prompt care when you need it most, helping to relieve pain and prevent further complications.',
    image: '/images/emergency-dental.svg',
    features: [
      'Same-Day Emergency Appointments',
      'Pain Management',
      'Broken Tooth Repair',
      'Emergency Extractions',
      'After-Hours Care'
    ]
  }
];

function Services() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            component="h1"
            variant="h2"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Comprehensive dental care tailored to your needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={service.title} xs={12} md={6}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(30, 58, 138, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: '0 8px 24px rgba(30, 58, 138, 0.12)',
                    borderColor: 'secondary.main'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 240,
                    objectFit: 'contain',
                    p: 2,
                    bgcolor: 'background.paper'
                  }}
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Key Features:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {service.features.map((feature) => (
                      <Typography
                        key={feature}
                        component="li"
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/contact"
            sx={{
              px: 4,
              background: 'linear-gradient(45deg, #1E3A8A 30%, #2563EB 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1E40AF 30%, #1E3A8A 90%)'
              }
            }}
          >
            Schedule a Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Dentist',
    image: '/images/doctor-1.svg',
    description: 'Dr. Johnson brings over 15 years of experience in general and cosmetic dentistry. She specializes in advanced dental procedures and is committed to providing gentle, patient-focused care.'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Orthodontist',
    image: '/images/doctor-2.svg',
    description: 'With expertise in modern orthodontic treatments, Dr. Chen helps patients achieve their perfect smile through personalized treatment plans using the latest techniques.'
  },
  {
    name: 'Dr. Emily Brown',
    role: 'Periodontist',
    image: '/images/doctor-3.svg',
    description: 'Dr. Brown specializes in gum health and dental implants. Her gentle approach and attention to detail ensure optimal results for complex dental procedures.'
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our practice, from patient care to the latest dental technologies.'
  },
  {
    title: 'Compassion',
    description: 'Understanding and empathy are at the heart of our patient care approach.'
  },
  {
    title: 'Innovation',
    description: 'We continuously invest in modern technology and techniques to provide the best possible care.'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency in all our dealings.'
  }
];

function About() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Mission Statement */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            About Abenezer Dental
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            We are committed to providing exceptional dental care in a comfortable and welcoming environment.
            Our mission is to help every patient achieve optimal oral health and a confident smile.
          </Typography>
        </MotionBox>

        {/* Our Values */}
        <Box sx={{ mb: 8 }}>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography variant="h5" gutterBottom color="primary">
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Team */}
        <Box sx={{ mb: 8 }}>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item key={member.name} xs={12} md={4}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 200,
                      height: 200,
                      mb: 2
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {member.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      color="primary"
                      sx={{ fontWeight: 500 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Choose Us */}
        <Box>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h5" gutterBottom color="primary">
                  State-of-the-Art Facility
                </Typography>
                <Typography paragraph color="text.secondary">
                  Our modern dental clinic is equipped with the latest technology and
                  designed for your comfort. We maintain the highest standards of
                  sterilization and safety protocols.
                </Typography>

                <Typography variant="h5" gutterBottom color="primary">
                  Experienced Team
                </Typography>
                <Typography paragraph color="text.secondary">
                  Our dental professionals bring years of experience and expertise in
                  various specialties. We regularly attend continuing education courses
                  to stay current with the latest dental advances.
                </Typography>
              </MotionBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h5" gutterBottom color="primary">
                  Patient-Centered Approach
                </Typography>
                <Typography paragraph color="text.secondary">
                  We take time to listen to your concerns and explain treatment
                  options thoroughly. Our goal is to make your dental visit as
                  comfortable and stress-free as possible.
                </Typography>

                <Typography variant="h5" gutterBottom color="primary">
                  Comprehensive Care
                </Typography>
                <Typography paragraph color="text.secondary">
                  From routine check-ups to advanced procedures, we offer a full range
                  of dental services under one roof. Our team works together to provide
                  coordinated, comprehensive care for all your dental needs.
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
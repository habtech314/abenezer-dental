import { Box, Container, Typography, Grid, Card, CardContent, Rating, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const MotionCard = motion(Card);

const testimonials = [
  {
    id: 1,
    name: 'Meron Tadesse',
    rating: 5,
    text: 'The dental care at Abenezer Dental is exceptional! Dr. Abenezer and the team made my teeth whitening experience comfortable and the results are amazing. My smile has never looked better!',
    image: '/images/patient-1.svg',
    service: 'Teeth Whitening'
  },
  {
    id: 2,
    name: 'Dawit Bekele',
    rating: 5,
    text: 'I was nervous about getting dental implants, but the team at Abenezer Dental was incredibly supportive. They explained every step of the process and ensured my comfort throughout. Now I can smile with confidence again!',
    image: '/images/patient-2.svg',
    service: 'Dental Implants'
  },
  {
    id: 3,
    name: 'Sara Mohammed',
    rating: 5,
    text: 'Getting braces at Abenezer Dental was the best decision. The orthodontic team is highly skilled and caring. They monitored my progress closely and now I have the straight teeth I always wanted!',
    image: '/images/patient-3.svg',
    service: 'Orthodontics'
  },
  {
    id: 4,
    name: 'Yohannes Alemu',
    rating: 5,
    text: 'The general dentistry services at Abenezer Dental are top-notch. Regular check-ups and cleanings are thorough, and the staff always makes me feel welcome. Highly recommend their preventive care!',
    image: '/images/patient-4.svg',
    service: 'General Dentistry'
  },
  {
    id: 5,
    name: 'Bethlehem Haile',
    rating: 5,
    text: 'My experience with cosmetic dentistry at Abenezer Dental was fantastic! The attention to detail in my veneer treatment was impressive. The results exceeded my expectations!',
    image: '/images/patient-5.svg',
    service: 'Cosmetic Dentistry'
  },
  {
    id: 6,
    name: 'Abel Kebede',
    rating: 5,
    text: 'I had a severe toothache and Abenezer Dental saw me immediately. Their emergency dental service is reliable and professional. They relieved my pain quickly and provided excellent follow-up care.',
    image: '/images/patient-6.svg',
    service: 'Emergency Dental Care'
  }
];

function Testimonials() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component="h1"
            variant="h2"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Patient Testimonials
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Read what our patients say about their experience at Abenezer Dental
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={testimonial.id} xs={12} md={6}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <CardContent sx={{ pt: 6 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 20,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 64,
                        height: 64,
                        border: 3,
                        borderColor: 'background.paper'
                      }}
                    />
                    <FormatQuoteIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: 40,
                        ml: -1,
                        mt: -4
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 2, mt: 2 }}>
                    <Rating value={testimonial.rating} readOnly />
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {testimonial.text}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="h6" gutterBottom>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle2" color="primary">
                      {testimonial.service}
                    </Typography>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
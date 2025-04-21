import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

// Sample gallery items - replace images with actual before/after photos
const galleryItems = {
  'Teeth Whitening': [
    {
      id: 1,
      title: 'Professional Whitening Treatment',
      description: 'Significant improvement in tooth color after professional whitening',
      beforeImage: '/images/whitening-before.svg',
      afterImage: '/images/whitening-after.svg'
    },
    {
      id: 2,
      title: 'Take-Home Whitening Results',
      description: 'Results achieved with our custom take-home whitening kit',
      beforeImage: '/images/whitening-before-2.svg',
      afterImage: '/images/whitening-after-2.svg'
    }
  ],
  'Dental Implants': [
    {
      id: 3,
      title: 'Single Tooth Implant',
      description: 'Natural-looking replacement for a missing front tooth',
      beforeImage: '/images/implant-before.svg',
      afterImage: '/images/implant-after.svg'
    },
    {
      id: 4,
      title: 'Multiple Implants',
      description: 'Full arch restoration with dental implants',
      beforeImage: '/images/implant-before-2.svg',
      afterImage: '/images/implant-after-2.svg'
    }
  ],
  'Orthodontics': [
    {
      id: 5,
      title: 'Braces Treatment',
      description: 'Alignment correction with traditional braces',
      beforeImage: '/images/ortho-before.svg',
      afterImage: '/images/ortho-after.svg'
    },
    {
      id: 6,
      title: 'Clear Aligner Results',
      description: 'Smile transformation with clear aligners',
      beforeImage: '/images/aligner-before.svg',
      afterImage: '/images/aligner-after.svg'
    }
  ],
  'Cosmetic Dentistry': [
    {
      id: 7,
      title: 'Veneers',
      description: 'Complete smile makeover with porcelain veneers',
      beforeImage: '/images/veneers-before.svg',
      afterImage: '/images/veneers-after.svg'
    },
    {
      id: 8,
      title: 'Bonding and Contouring',
      description: 'Aesthetic improvement with dental bonding',
      beforeImage: '/images/bonding-before.svg',
      afterImage: '/images/bonding-after.svg'
    }
  ]
};

function Gallery() {
  const [currentTab, setCurrentTab] = useState(Object.keys(galleryItems)[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Work
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Before and after transformations that showcase our expertise
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="gallery categories"
          >
            {Object.keys(galleryItems).map((category) => (
              <Tab
                key={category}
                label={category}
                value={category}
                sx={{ textTransform: 'none' }}
              />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {galleryItems[currentTab].map((item, index) => (
            <Grid item key={item.id} xs={12} md={6}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box sx={{ position: 'relative', display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: '50%',
                      height: 300,
                      objectFit: 'cover'
                    }}
                    image={item.beforeImage}
                    alt={`Before - ${item.title}`}
                    onClick={() => handleImageClick(item)}
                  />
                  <CardMedia
                    component="img"
                    sx={{
                      width: '50%',
                      height: 300,
                      objectFit: 'cover'
                    }}
                    image={item.afterImage}
                    alt={`After - ${item.title}`}
                    onClick={() => handleImageClick(item)}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={Boolean(selectedImage)}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
        >
          {selectedImage && (
            <DialogContent sx={{ p: 0, position: 'relative' }}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)'
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                  <Typography variant="h6" gutterBottom>Before</Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%', height: 'auto' }}
                    image={selectedImage.beforeImage}
                    alt={`Before - ${selectedImage.title}`}
                  />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '50%' }, p: 2 }}>
                  <Typography variant="h6" gutterBottom>After</Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%', height: 'auto' }}
                    image={selectedImage.afterImage}
                    alt={`After - ${selectedImage.title}`}
                  />
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>{selectedImage.title}</Typography>
                <Typography variant="body1">{selectedImage.description}</Typography>
              </Box>
            </DialogContent>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}

export default Gallery;
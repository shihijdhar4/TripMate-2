import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  CardActions,
  Chip,
  Stack,
  Dialog,
  DialogContent,
  IconButton,
  Zoom
} from '@mui/material';
import { Visibility, Map, Close, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: 'Rishikesh',
    category: 'Spiritual',
    description: 'The world capital of Yoga, nestled in the foothills of the Himalayas by the holy Ganga. Known for its sacred temples, ashrams, and the famous Lakshman Jhula bridge, it offers a unique blend of spirituality and adventure like river rafting.',
    image: 'https://images.unsplash.com/photo-1598977123418-45003331566f?q=80&w=1470&auto=format&fit=crop',
    color: '#818cf8',
    location: 'Uttarakhand, India'
  },
  {
    title: 'Goa',
    category: 'Beach',
    description: 'A tropical paradise known for its pristine beaches, vibrant nightlife, and Portuguese heritage. From the sun-kissed sands of Baga to the historic churches of Old Goa, it is the ultimate destination for relaxation and celebration.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1374&auto=format&fit=crop',
    color: '#fbbf24',
    location: 'Goa, India'
  },
  {
    title: 'Manali',
    category: 'Mountains',
    description: 'A breathtaking high-altitude Himalayan resort town known for its cool climate and snow-capped peaks. Perfect for trekking, paragliding, and exploring the Solang Valley or the Rohtang Pass, it is a haven for mountain lovers.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1374&auto=format&fit=crop',
    color: '#10b981',
    location: 'Himachal Pradesh, India'
  }
];

const TripMateCards = () => {
  const [selectedDest, setSelectedDest] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (dest) => {
    setSelectedDest(dest);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {destinations.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} key={dest.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 6, // 24px per plan
                  overflow: 'hidden',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                  }
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={dest.image}
                    alt={dest.title}
                    sx={{ transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.1)' } }}
                  />
                  <Chip 
                    label={dest.category} 
                    size="small"
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      left: 16, 
                      bgcolor: 'rgba(255, 255, 255, 0.95)', 
                      backdropFilter: 'blur(8px)',
                      fontWeight: 800,
                      color: dest.color,
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="h5" fontWeight="900" sx={{ mb: 1.5, color: '#0f172a' }}>
                    {dest.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, height: 60, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {dest.description}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" color="primary.main">
                    <LocationOn fontSize="small" />
                    <Typography variant="caption" fontWeight="800" sx={{ letterSpacing: '0.02em' }}>
                      {dest.location}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 4, pt: 0 }}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    onClick={() => handleOpen(dest)}
                    startIcon={<Visibility />}
                    sx={{ 
                      borderRadius: 3, 
                      py: 1.5, 
                      textTransform: 'none', 
                      fontWeight: 800,
                      bgcolor: '#6366F1',
                      boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.4)',
                      '&:hover': {
                        bgcolor: '#4f46e5',
                        boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.5)',
                      }
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Destination Detail Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Zoom}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 6, overflow: 'hidden' }
        }}
      >
        {selectedDest && (
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                color: 'text.primary',
                zIndex: 10,
                '&:hover': { bgcolor: 'white' }
              }}
            >
              <Close />
            </IconButton>
            
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={selectedDest.image}
                  alt={selectedDest.title}
                  sx={{ height: { xs: 300, md: '100%' }, objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Chip 
                    label={selectedDest.category} 
                    size="small"
                    sx={{ mb: 2, fontWeight: 800, color: selectedDest.color, bgcolor: selectedDest.color + '15' }}
                  />
                  <Typography variant="h3" fontWeight="900" gutterBottom>
                    {selectedDest.title}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" color="text.secondary" sx={{ mb: 3 }}>
                    <LocationOn fontSize="small" />
                    <Typography variant="body2" fontWeight="700">
                      {selectedDest.location}
                    </Typography>
                  </Stack>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
                    {selectedDest.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    size="large"
                    startIcon={<Map />}
                    sx={{ py: 2, borderRadius: 4, fontWeight: 800 }}
                  >
                    Plan Trip to {selectedDest.title}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
        )}
      </Dialog>
    </Container>
  );
};

export default TripMateCards;

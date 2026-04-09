import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, Button, Paper, Divider, Chip, Rating } from '@mui/material';
import { ArrowBack, LocationOn, AttachMoney, Star, AccessTime } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import TripMateHero from '../components/TripMateHero';

const mockDetails = {
    title: 'Bali Beach Resort',
    location: 'Bali, Indonesia',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200',
      'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200'
    ],
    price: 850,
    rating: 4.8,
    reviews: 124,
    description: 'Experience the ultimate tropical getaway at our Bali Beach Resort. Nestled along the pristine coastline, this resort offers breathtaking ocean views, luxurious accommodations, and world-class amenities. Perfect for couples, families, and solo adventurers looking to unwind.',
    duration: '5 Days, 4 Nights',
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', desc: 'Settle into your beachfront villa and enjoy a complimentary welcome dinner.' },
      { day: 2, title: 'Island Hopping', desc: 'Visit nearby islands, snorkel in crystal clear waters, and relax on hidden beaches.' },
      { day: 3, title: 'Cultural Tour', desc: 'Explore local temples, markets, and experience traditional Balinese culture.' },
      { day: 4, title: 'Spa & Leisure', desc: 'Indulge in a full-day spa treatment and enjoy the resort amenities at your leisure.' },
      { day: 5, title: 'Departure', desc: 'Breakfast with ocean views before heading back to the airport.' },
    ],
    amenities: ['Free WiFi', 'Ocean View', 'Private Pool', 'Spa Access', 'Airport Transfer', 'Breakfast Included']
};

const TripMateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = mockDetails; // Using mock right now

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % trip.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [trip.images.length]);

  const handleBookNow = () => {
    toast.success('Successfully booked! Connecting to payment...', {
      position: 'bottom-center',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      iconTheme: {
        primary: '#4ade80',
        secondary: '#fff',
      },
    });
  };

  return (
    <Box sx={{ pb: 10 }}>
      {/* Toast provider */}
      <Toaster />
      {/* Banner */}
      <Box sx={{ position: 'relative', height: '50vh', minHeight: 400, width: '100%', overflow: 'hidden' }}>
        {trip.images.map((img, index) => (
          <Box 
            key={index}
            component="img" 
            src={img} 
            sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.4)' }} />
        
        <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
          <Button 
            variant="contained" 
            color="inherit" 
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
            sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary', '&:hover': { bgcolor: 'white' } }}
          >
            Back
          </Button>
        </Box>

        <Container maxWidth="lg" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, pb: 6, zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" color="white" fontWeight="800" gutterBottom>
              {trip.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                <LocationOn sx={{ mr: 0.5 }} />
                <Typography variant="h6">{trip.location}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                <AccessTime sx={{ mr: 0.5 }} />
                <Typography variant="h6">{trip.duration}</Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <Typography variant="h4" fontWeight="800" sx={{ mb: 2 }}>Overview</Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {trip.description}
              </Typography>

              <Box sx={{ mt: 3, mb: 2 }}>
                <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>Top Amenities</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {trip.amenities.map((amenity, index) => (
                    <Chip key={index} label={amenity} sx={{ bgcolor: 'primary.50', color: 'primary.main', fontWeight: 600, border: '1px solid', borderColor: 'primary.200' }} />
                  ))}
                </Box>
              </Box>

              <Divider sx={{ my: 5 }} />

              <Typography variant="h4" fontWeight="800" sx={{ mb: 4 }}>Trip Itinerary</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', ml: 2, '&::before': { content: '""', position: 'absolute', top: 0, bottom: 0, left: 15, width: 2, bgcolor: 'divider', zIndex: 0 } }}>
                {trip.itinerary.map((item, index) => (
                  <Box key={item.day} sx={{ position: 'relative', pl: 6, pb: index === trip.itinerary.length - 1 ? 0 : 5 }}>
                    <Box sx={{ position: 'absolute', left: 0, top: 0, width: 32, height: 32, borderRadius: '50%', bgcolor: 'primary.main', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', zIndex: 1, boxShadow: 1 }}>
                      {item.day}
                    </Box>
                    <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: 'background.paper', transition: 'all 0.3s ease', '&:hover': { boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', borderColor: 'primary.light' } }}>
                      <Typography variant="h6" color="text.primary" fontWeight="bold" sx={{ mb: 1 }}>
                         {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {item.desc}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', position: 'sticky', top: 100 }}>
                <Typography variant="h5" fontWeight="800" sx={{ mb: 2 }}>Booking Detail</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    ${trip.price}
                  </Typography>
                  <Typography color="text.secondary">/ person</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Rating value={trip.rating} precision={0.1} readOnly size="large" sx={{ color: '#F59E0B' }}/>
                  <Typography variant="body1" sx={{ ml: 1, fontWeight: 'bold' }}>
                    {trip.rating} <Typography component="span" color="text.secondary" fontWeight="normal">({trip.reviews} reviews)</Typography>
                  </Typography>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography color="text.secondary">Taxes & Fees</Typography>
                     <Typography fontWeight="bold">$50</Typography>
                   </Box>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography color="text.secondary">Total Estimate</Typography>
                     <Typography fontWeight="bold" variant="h6">${trip.price + 50}</Typography>
                   </Box>
                </Box>

                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  fullWidth 
                  onClick={handleBookNow}
                  sx={{ py: 1.5, fontSize: '1.1rem', fontWeight: 'bold', borderRadius: 2, textTransform: 'none', boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.39)', '&:hover': { boxShadow: '0 6px 20px rgba(79, 70, 229, 0.23)' } }}
                >
                  Confirm Booking
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TripMateDetails;

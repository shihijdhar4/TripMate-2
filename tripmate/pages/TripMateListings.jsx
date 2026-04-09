import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import TripMateFilter from '../components/TripMateFilter';
import TripCard from '../components/TripCard';

// Mock destinations
const mockDestinations = [
  { id: 1, title: 'Bali Beach Resort', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800', price: '$850', rating: 4.8, reviews: 124, category: 'Beach' },
  { id: 2, title: 'Swiss Alps Cabin', location: 'Zermatt, Switzerland', image: 'https://images.unsplash.com/photo-1531737212413-66720511c210?auto=format&fit=crop&w=800', price: '$1,200', rating: 4.9, reviews: 89, category: 'Mountain' },
  { id: 3, title: 'Tokyo City Tour', location: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800', price: '$950', rating: 4.7, reviews: 210, category: 'City' },
  { id: 4, title: 'Santorini Villas', location: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1516483638261-f40889da6d5b?auto=format&fit=crop&w=800', price: '$1,500', rating: 4.9, reviews: 312, category: 'Luxury' },
  { id: 5, title: 'Amazon Rainforest', location: 'Manaus, Brazil', image: 'https://images.unsplash.com/photo-1518182170546-076616fdcbac?auto=format&fit=crop&w=800', price: '$1,100', rating: 4.6, reviews: 95, category: 'Adventure' },
  { id: 6, title: 'New York Escape', location: 'New York, USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800', price: '$1,800', rating: 4.8, reviews: 450, category: 'City' },
];

const TripMateListings = () => {
  const [destinations] = useState(mockDestinations);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="800" sx={{ mb: 4, color: 'text.primary' }}>
        Explore Destinations
      </Typography>

      <Grid container spacing={4}>
        {/* Filter Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', position: 'sticky', top: 90 }}>
            {/* Reusing the existing filter component but styling it for a sidebar */}
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>Filters</Typography>
            <TripMateFilter />
          </Paper>
        </Grid>

        {/* Listings Grid */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {destinations.map((dest, index) => (
              <Grid item xs={12} sm={6} lg={4} key={dest.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <TripCard {...dest} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TripMateListings;

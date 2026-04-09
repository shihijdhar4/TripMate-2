import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Grid } from '@mui/material';
import TripCard from '../components/TripCard';
import EmptyState from '../components/EmptyState';
import { motion } from 'framer-motion';

const bookedTrips = [
  { id: 101, title: 'Bali Beach Resort', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800', price: '$850', rating: 4.8, reviews: 124, category: 'Beach', status: 'upcoming' },
];

const completedTrips = [
  { id: 102, title: 'Tokyo City Tour', location: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800', price: '$950', rating: 4.7, reviews: 210, category: 'City', status: 'completed' },
];

const TripMateMyTrips = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const currentTrips = tabValue === 0 ? bookedTrips : completedTrips;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="800" sx={{ mb: 4 }}>
        My Trips
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ '& .MuiTab-root': { fontWeight: 600, fontSize: '1.1rem', textTransform: 'none' } }}>
          <Tab label={`Upcoming (${bookedTrips.length})`} />
          <Tab label={`Completed (${completedTrips.length})`} />
        </Tabs>
      </Box>

      {currentTrips.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <EmptyState 
            title="No trips found" 
            description={tabValue === 0 ? "You don't have any upcoming trips. Start exploring!" : "You haven't completed any trips yet."} 
            actionLabel="Explore Destinations"
            onAction={() => window.location.href = '/tripmate/listings'}
          />
        </motion.div>
      ) : (
        <Grid container spacing={4}>
          {currentTrips.map((trip) => (
            <Grid item xs={12} sm={6} md={4} key={trip.id}>
              <TripCard {...trip} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default TripMateMyTrips;

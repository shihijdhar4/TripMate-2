import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Public, AttachMoney, FlightTakeoff } from '@mui/icons-material';
import TripMateHero from '../components/TripMateHero';
import TripMateFilter from '../components/TripMateFilter';
import TripMateCards from '../components/TripMateCards';
import { motion } from 'framer-motion';

const TripMateHome = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* 1. Hero section */}
      <Box component="section">
        <TripMateHero />
      </Box>

      {/* Featured Highlights */}
      <Container maxWidth="xl" sx={{ mt: -6, mb: 4, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={3}>
          {[
            { icon: <AttachMoney fontSize="large" color="primary" />, title: 'Best Price Guarantee', desc: 'We always offer the most competitive rates.' },
            { icon: <Public fontSize="large" color="primary" />, title: 'Global Destinations', desc: 'Choose from over 100+ countries to explore.' },
            { icon: <FlightTakeoff fontSize="large" color="primary" />, title: 'Fast & Easy Booking', desc: 'Seamless booking process in just a few clicks.' }
          ].map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Box sx={{ mb: 2, p: 2, bgcolor: 'primary.50', borderRadius: '50%', display: 'inline-flex' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>{feature.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* 2. Main Layout Area */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Sidebar: Filter */}
          <Grid item xs={12} md={3}>
            <Box sx={{ position: 'sticky', top: 90 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TripMateFilter />
              </motion.div>
            </Box>
          </Grid>

          {/* Right Area: Cards/Other */}
          <Grid item xs={12} md={9}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mt: { xs: 0, lg: -5 } }}>
                <TripMateCards />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TripMateHome;

import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  InputAdornment, 
  Button,
  Paper
} from '@mui/material';
import { Search, LocationOn } from '@mui/icons-material';

import { motion } from 'framer-motion';

const TripMateHero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        width: '100%',
        backgroundImage: 'url("/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              mb: 2
            }}
          >
            Explore the World with TripMate
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 6, 
              fontWeight: 500, 
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}
          >
            Find your perfect destination and create unforgettable memories
          </Typography>

          <Paper
            elevation={10}
            sx={{
              p: { xs: 1, sm: 1.5 },
              display: 'flex',
              alignItems: 'center',
              borderRadius: '16px',
              maxWidth: 700,
              mx: 'auto',
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <TextField
              fullWidth
              placeholder="Search your destination..."
              variant="standard"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ pl: 2 }}>
                    <LocationOn color="primary" />
                  </InputAdornment>
                ),
                sx: { 
                  height: 50, 
                  fontSize: '1.1rem',
                  color: '#1e293b'
                }
              }}
            />
            <Button 
              variant="contained" 
              size="large"
              startIcon={<Search />}
              sx={{ 
                borderRadius: '12px', 
                px: { xs: 3, sm: 5 }, 
                py: 1.5,
                ml: 1,
                textTransform: 'none',
                fontWeight: 700,
                bgcolor: '#6366F1',
                '&:hover': { bgcolor: '#4f46e5' }
              }}
            >
              Search
            </Button>
          </Paper>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap' }}>
            {['Mountain', 'Beach', 'City', 'Desert'].map((tag) => (
              <Typography key={tag} variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                #{tag}
              </Typography>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TripMateHero;

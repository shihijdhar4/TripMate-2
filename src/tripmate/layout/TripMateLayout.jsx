import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import TripMateNavbar from '../components/TripMateNavbar';
import { tripmateTheme } from '../../theme/tripmateTheme';

const TripMateLayout = () => {
  return (
    <ThemeProvider theme={tripmateTheme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        <CssBaseline />
        {/* Navigation Bar */}
        <TripMateNavbar />
        
        {/* Main Content Rendered by React Router */}
        <Box component="main" sx={{ flexGrow: 1, pt: '72px' }}>
          <Outlet />
        </Box>

        {/* Global Footer for TripMate */}
        <Box sx={{ py: 6, textAlign: 'center', bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" fontFamily="Inter, sans-serif">
            © {new Date().getFullYear()} TripMate Travel. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TripMateLayout;

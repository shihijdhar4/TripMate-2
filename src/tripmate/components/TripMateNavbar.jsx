import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, FlightTakeoff } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Explore', path: '/tripmate' },
  { label: 'Destinations', path: '/tripmate/listings' },
  { label: 'My Trips', path: '/tripmate/my-trips' },
  { label: 'Plan a Trip', path: '/tripmate/add-trip' }
];

const TripMateNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
        <FlightTakeoff color="primary" />
        <Typography variant="h6" fontWeight="bold" color="primary">
          TripMate
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/tripmate' && location.pathname.startsWith(item.path));
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                onClick={() => handleNavigation(item.path)}
                sx={{ 
                  textAlign: 'center',
                  bgcolor: isActive ? 'primary.50' : 'transparent',
                  color: isActive ? 'primary.main' : 'text.primary',
                  fontWeight: isActive ? 700 : 500
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive ? 700 : 500 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center', bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
          {/* Logo */}
          <Box onClick={() => handleNavigation('/tripmate')} sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
            <FlightTakeoff sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ fontWeight: 800, color: '#1e293b', letterSpacing: '-0.5px' }}
            >
              TripMate
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/tripmate' && location.pathname.startsWith(item.path));
                return (
                  <Button 
                    key={item.label} 
                    onClick={() => handleNavigation(item.path)}
                    sx={{ 
                      color: isActive ? 'primary.main' : '#64748b', 
                      fontWeight: isActive ? 700 : 600, 
                      '&:hover': { color: 'primary.main', bgcolor: 'transparent' } 
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              <Box sx={{ ml: 2 }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  sx={{ 
                    borderRadius: '8px', 
                    px: 3, 
                    textTransform: 'none', 
                    fontWeight: 700,
                    boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)'
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default TripMateNavbar;

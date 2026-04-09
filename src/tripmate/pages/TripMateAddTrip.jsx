import React, { useState } from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Grid, InputAdornment } from '@mui/material';
import { AttachMoney, CalendarToday, LocationOn, FlightTakeoff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const TripMateAddTrip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.destination || !formData.startDate || !formData.budget) {
      toast.error('Please fill out all required fields');
      return;
    }
    
    toast.success('Your trip has been planned successfully!');
    setTimeout(() => {
      navigate('/tripmate/my-trips');
    }, 1500);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h3" fontWeight="800" sx={{ mb: 2, textAlign: 'center' }}>
          Plan a New Trip
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          Fill in the details below to start adding a new dream destination to your itinerary. We'll help you organize everything.
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Destination"
                  name="destination"
                  variant="outlined"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><LocationOn color="action" /></InputAdornment>,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  name="startDate"
                  type="date"
                  variant="outlined"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><CalendarToday color="action" /></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  name="endDate"
                  type="date"
                  variant="outlined"
                  value={formData.endDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><CalendarToday color="action" /></InputAdornment>,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Budget"
                  name="budget"
                  type="number"
                  variant="outlined"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><AttachMoney color="action" /></InputAdornment>,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Trip Notes (Optional)"
                  name="notes"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Places you want to see, things to do..."
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button 
                  type="submit"
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  fullWidth
                  startIcon={<FlightTakeoff />}
                  sx={{ py: 1.5, fontSize: '1.1rem' }}
                >
                  Create Trip Plan
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default TripMateAddTrip;

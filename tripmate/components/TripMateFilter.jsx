import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  Divider,
  Paper
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon, 
  FilterList as FilterListIcon,
  LocalActivity,
  Place,
  Groups,
  Mood,
  Restaurant,
  Hotel,
  DirectionsCar,
  Diamond
} from '@mui/icons-material';

const filterData = [
  {
    id: 'activities',
    title: 'Activities (MOST USED)',
    icon: <LocalActivity fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Trekking', 'Beaches', 'Nightlife', 'Shopping', 'Sightseeing']
  },
  {
    id: 'placeType',
    title: 'Place Type',
    icon: <Place fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Nature', 'Historical', 'Urban', 'Adventure spots']
  },
  {
    id: 'crowdLevel',
    title: 'Crowd Level',
    icon: <Groups fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Less crowded', 'Moderate', 'Busy']
  },
  {
    id: 'travelVibe',
    title: 'Travel Vibe / Mood',
    icon: <Mood fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Chill', 'Party', 'Exploration', 'Luxury']
  },
  {
    id: 'foodPreference',
    title: 'Food Preference 🍜',
    icon: <Restaurant fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Veg', 'Non-veg', 'Street food', 'Cafes']
  },
  {
    id: 'stayPreference',
    title: 'Stay Preference 🏨',
    icon: <Hotel fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Budget stay', 'Premium', 'Hostel', 'Resort']
  },
  {
    id: 'accessibility',
    title: 'Accessibility / Transport 🚗',
    icon: <DirectionsCar fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />,
    options: ['Easy to reach', 'Remote', 'Road trip friendly']
  }
];

const TripMateFilter = () => {
  const [expanded, setExpanded] = useState('activities');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper 
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', md: 320 },
        bgcolor: 'transparent',
        mr: 'auto',
        ml: 0
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, px: 1 }}>
        <FilterListIcon sx={{ color: 'primary.main', mr: 1, fontSize: 32 }} />
        <Typography variant="h6" fontWeight="800" color="primary.main">
          Filter Results
        </Typography>
      </Box>

      {/* Hidden Gems Toggle */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        bgcolor: 'primary.50',
        borderRadius: 3,
        p: 2,
        mb: 1,
        border: '1px solid',
        borderColor: 'primary.100'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Diamond sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="subtitle2" fontWeight="800" color="primary.dark">
            Hidden Gems 💎
          </Typography>
        </Box>
        <Switch color="primary" />
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3, ml: 2, fontWeight: 600 }}>
        Show less crowded places
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Accordion List */}
      {filterData.map((section) => (
        <Accordion 
          key={section.id}
          expanded={expanded === section.id} 
          onChange={handleChange(section.id)}
          disableGutters
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            '&:before': { display: 'none' },
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
            sx={{ px: 1, '& .MuiAccordionSummary-content': { my: 1.5 } }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {section.icon}
              <Typography variant="subtitle2" fontWeight="700" color="text.primary">
                {section.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 1, pt: 0, pb: 2 }}>
            <FormGroup>
              {section.options.map((option) => (
                <FormControlLabel 
                  key={option} 
                  control={
                    <Checkbox 
                      size="small" 
                      sx={{ 
                        color: 'primary.light', 
                        '&.Mui-checked': { color: 'primary.main' } 
                      }} 
                    />
                  } 
                  label={<Typography variant="body2" fontWeight="500" color="text.secondary">{option}</Typography>} 
                  sx={{ mb: 0.5 }}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default TripMateFilter;

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, AttachMoney } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

const TripCard = ({ id, title, location, image, price, rating, reviews, category }) => {
  const navigate = useNavigate();

  return (
    <MotionCard
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onClick={() => navigate(`/tripmate/trip/${id}`)}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
          sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }}
        />
        {category && (
          <Chip 
            label={category} 
            color="secondary" 
            size="small" 
            sx={{ position: 'absolute', top: 16, right: 16, fontWeight: 600 }} 
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 700, mb: 0, lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 800, display: 'flex', alignItems: 'center' }}>
            <AttachMoney fontSize="small" sx={{ mr: -0.5 }}/>{price}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'text.secondary' }}>
          <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2" fontWeight="500">
            {location}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', mb: 2 }}>
          <Rating value={rating} precision={0.1} size="small" readOnly sx={{ color: '#F59E0B' }} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontWeight: 500 }}>
            {rating} ({reviews} reviews)
          </Typography>
        </Box>

        <Button 
          variant="outlined" 
          fullWidth 
          sx={{ 
            borderWidth: 2, 
            '&:hover': { borderWidth: 2 } 
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tripmate/trip/${id}`);
          }}
        >
          View Details
        </Button>
      </CardContent>
    </MotionCard>
  );
};

export default TripCard;

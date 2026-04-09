import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { SearchOff } from '@mui/icons-material';

const EmptyState = ({ title = 'No results found', message = 'Try adjusting your search or filters to find what you looking for.', onAction }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: '1px dashed',
        borderColor: 'divider',
      }}
    >
      <SearchOff sx={{ fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
        {message}
      </Typography>
      {onAction && (
        <Button variant="outlined" onClick={onAction}>
          Clear All Filters
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;

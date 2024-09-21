// PromotionalBanner.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PromotionalBanner = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5">Special Offer: 20% off on first purchase!</Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Claim Offer
      </Button>
    </Box>
  );
};

export default PromotionalBanner;

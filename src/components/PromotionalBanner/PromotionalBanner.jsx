import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PromotionalBanner = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, backgroundColor: '#f9f9f9', p: 4 }}>
      <Typography variant="h5" sx={{ color: '#f46a6a' }}>
        Special Offer: 20% off on first purchase!
      </Typography>
      <Button variant="contained" sx={{ mt: 2, backgroundColor: '#3fcf8e', color: '#fff' }}>
        Claim Offer
      </Button>
    </Box>
  );
};

export default PromotionalBanner;

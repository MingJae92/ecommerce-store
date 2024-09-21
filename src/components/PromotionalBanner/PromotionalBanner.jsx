import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const PromotionalBanner = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: '#eceff1', p: 4, mt: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: 'center', height: '40vh' }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Limited-Time Offer!
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Save up to 30% on select styles. Hurry, while supplies last.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Shop the Sale
        </Button>
      </Box>
    </Container>
  );
};

export default PromotionalBanner;

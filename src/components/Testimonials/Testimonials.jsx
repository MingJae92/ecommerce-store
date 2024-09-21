import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';

const Testimonials = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: '#f9f9f9', p: 4, mt: 4 }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          What Our Customers Say
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Box sx={{ p: 2, maxWidth: '300px' }}>
            <Avatar alt="Customer 1" src="https://via.placeholder.com/100" sx={{ margin: '0 auto', mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
              "The products are top-notch, and the service is excellent! Will definitely shop again."
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Alex D.
            </Typography>
          </Box>
          
          <Box sx={{ p: 2, maxWidth: '300px' }}>
            <Avatar alt="Customer 2" src="https://via.placeholder.com/100" sx={{ margin: '0 auto', mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
              "I love the variety and quality. Delivery was super fast!"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Jamie L.
            </Typography>
          </Box>

          <Box sx={{ p: 2, maxWidth: '300px' }}>
            <Avatar alt="Customer 3" src="https://via.placeholder.com/100" sx={{ margin: '0 auto', mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
              "Great shopping experience, I found exactly what I was looking for!"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Taylor R.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonials;

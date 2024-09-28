import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Hero from '../../Hero/Hero';
import Testimonials from '../../Testimonials/Testimonials';

const paymentMethods = [
  {
    title: 'Credit/Debit Card',
    description: 'Pay securely with your credit or debit card.',
    imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'PayPal',
    description: 'Use your PayPal account for quick payments.',
    imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Apple Pay',
    description: 'Pay with Apple Pay on your Apple devices.',
    imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Google Pay',
    description: 'Use Google Pay for fast payments from your Android device.',
    imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

function PaymentOptions() {
  return (
    <Container maxWidth={false} sx={{ padding: 0, marginTop: 4 }}> {/* Set maxWidth to false */}
      <Hero />
      <Typography variant="h4" align="center" gutterBottom>
        Payment Options
      </Typography>

      <Grid container spacing={4}>
        {paymentMethods.map((method, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <img src={method.imgSrc} alt={method.title} style={{ width: '100%', marginBottom: 16 }} />
                <Typography variant="h6">{method.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {method.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h6">Order Summary</Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Proceed to Checkout
        </Button>
      </Box>
      <Testimonials />
    </Container>
  );
}

export default PaymentOptions;

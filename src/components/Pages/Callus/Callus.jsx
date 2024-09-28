import React from 'react';
import { Box, Typography, Container, Grid, Button, Link } from '@mui/material';
import Hero from '../../Hero/Hero';
import Testimonials from '../../Testimonials/Testimonials';

function Callus() {
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: '2rem 0', width: '100%' }}>
      <Hero />
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          We're Here to Help
        </Typography>
        <Typography variant="subtitle1">
          Have any questions or need assistance? Our customer service team is available 24/7 to assist you.
        </Typography>
      </Box>

      {/* Contact Information */}
      <Grid container spacing={4}>
        {/* Phone Section */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom>
              Call Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Need immediate assistance? Give us a call.
            </Typography>
            <Typography variant="h6" color="primary">
              1-800-NIKE-CALL
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Mon-Fri: 8am-8pm | Sat-Sun: 9am-6pm
            </Typography>
          </Box>
        </Grid>

        {/* Email Section */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom>
              Email Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Can't talk right now? Send us an email.
            </Typography>
            <Button variant="contained" color="primary">
              Contact via Email
            </Button>
            <Typography variant="body2" color="textSecondary" mt={2}>
              We usually respond within 24 hours.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <Box mt={6} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Visit our <Link href="/faq" color="primary">FAQ page</Link> for answers to common inquiries.
        </Typography>
      </Box>

      <Testimonials />
    </Container>
  );
}

export default Callus;

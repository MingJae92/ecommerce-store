import React from 'react';
import { Container, Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111',
        color: '#fff',
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Get Help
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Order Status
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Shipping
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Returns
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Payment Options
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Careers
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              News
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Sustainability
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Social
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Instagram
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Facebook
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Twitter
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              YouTube
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Email
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Live Chat
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Call Us
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid #444', pt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            © 2024 My Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

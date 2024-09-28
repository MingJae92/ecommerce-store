import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import Hero from '../../Hero/Hero';
import Testimonials from '../../Testimonials/Testimonials';

const jobListings = [
  { title: 'Software Engineer', description: 'Build and maintain our applications.' },
  { title: 'Product Manager', description: 'Lead product development initiatives.' },
  { title: 'UI/UX Designer', description: 'Design user-friendly interfaces.' },
  // Add more job listings as needed
];

function Careers() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default', padding: 4 }}>
      <Hero />
      <Typography variant="h2" align="center" gutterBottom>
        Join Our Team
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Explore our career opportunities and be part of our journey!
      </Typography>
      
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {jobListings.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 6, textAlign: 'center' }}>
        <Typography variant="h5">Why Work With Us?</Typography>
        <Typography variant="body1" paragraph>
          We foster a culture of innovation, collaboration, and growth. Join us and take your career to new heights.
        </Typography>
        <Typography variant="body1">
          Benefits include:
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li>Health and Wellness Programs</li>
          <li>Flexible Working Hours</li>
          <li>Career Development Opportunities</li>
        </ul>
      </Box>
      
      <Box sx={{ marginTop: 6, textAlign: 'center' }}>
        <Typography variant="h5">Get in Touch</Typography>
        <Typography variant="body1" paragraph>
          Have questions about a position? Reach out to our HR team at hr@example.com.
        </Typography>
      </Box>
      <Testimonials />
    </Box>
  );
}

export default Careers;

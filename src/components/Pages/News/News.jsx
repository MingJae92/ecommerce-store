import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import Testimonials from '../../Testimonials/Testimonials';
import Hero from '../../Hero/Hero';

const newsArticles = [
  {
    id: 1,
    title: 'New Air Max Collection Launch',
    description: 'Discover the latest styles and innovations in our new Air Max collection.',
    image: 'your-image-url-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Sustainable Practices at Nike',
    description: 'Learn about our commitment to sustainability and how we’re making a difference.',
    image: 'your-image-url-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'The Future of Footwear Technology',
    description: 'Explore the latest advancements in footwear technology and design.',
    image: 'your-image-url-3.jpg',
    link: '#',
  },
  // Add more articles as needed
];

function News() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default', p: 2 }}>
      <Hero />
      <Typography variant="h3" align="center" sx={{ my: 4 }}>
        News
      </Typography>
      <Grid container spacing={4}>
        {newsArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
                <Button size="small" color="primary" href={article.link}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Testimonials />
    </Box>
  );
}

export default News;

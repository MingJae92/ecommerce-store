// FeaturedProducts.js
import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const FeaturedProducts = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>
        Featured Products
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, p: 2 }}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card>
              <CardMedia
                component="img"
                alt={`Product ${item}`}
                height="140"
                image="https://via.placeholder.com/150"
              />
              <CardContent>
                <Typography variant="h6">Product {item}</Typography>
                <Typography variant="body2">Description for Product {item}</Typography>
                <Button size="small">View More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FeaturedProducts;

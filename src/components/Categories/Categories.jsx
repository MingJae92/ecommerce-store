// Categories.js
import React from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';

const Categories = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>
        Categories
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, p: 2 }}>
        {[1, 2, 3].map((category) => (
          <Grid item xs={12} sm={4} key={category}>
            <Card>
              <CardContent>
                <Typography variant="h6">Category {category}</Typography>
                <Button size="small">Explore</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;

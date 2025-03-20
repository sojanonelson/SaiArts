import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const products = [
  { id: 1, name: 'Car Sticker', image: 'path/to/car-sticker.jpg', description: 'Custom sticker for cars' },
  { id: 2, name: 'Bike Sticker', image: 'path/to/bike-sticker.jpg', description: 'Custom sticker for bikes' },
  // Add more products as needed
];

const ProductScreen = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductScreen;

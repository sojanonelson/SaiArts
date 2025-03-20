import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const works = [
  { id: 1, name: 'Car Art', image: 'path/to/car-art.jpg', description: 'Custom art on a car' },
  { id: 2, name: 'Bike Art', image: 'path/to/bike-art.jpg', description: 'Custom art on a bike' },
  // Add more works as needed
];

const WorksScreen = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Works
      </Typography>
      <Grid container spacing={3}>
        {works.map((work) => (
          <Grid item key={work.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={work.image}
                alt={work.name}
              />
              <CardContent>
                <Typography variant="h5">{work.name}</Typography>
                <Typography variant="body2">{work.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WorksScreen;

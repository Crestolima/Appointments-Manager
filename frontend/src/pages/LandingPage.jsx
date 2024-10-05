import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, TextField, Grid, Card, CardContent, CardActions, CardMedia, Box } from '@mui/material';

const businesses = [
  { id: 1, name: "Barber Joe's", description: "Best in town", imageUrl: "https://via.placeholder.com/150", rating: 4.8 },
  { id: 2, name: "Beauty Bliss", description: "Luxury salon services", imageUrl: "https://via.placeholder.com/150", rating: 4.5 },
  { id: 3, name: "The Groom Room", description: "Grooming for gentlemen", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
];

const LandingPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Appointment Manager
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 5 }}>
        {/* Search Bar */}
        <Box mb={3}>
          <TextField
            fullWidth
            label="Search for businesses or services"
            variant="outlined"
          />
        </Box>

        {/* Business Listings */}
        <Grid container spacing={3}>
          {businesses.map((business) => (
            <Grid item xs={12} sm={6} md={4} key={business.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={business.imageUrl}
                  alt={business.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {business.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {business.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {business.rating}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Details</Button>
                  <Button size="small">Book Now</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;

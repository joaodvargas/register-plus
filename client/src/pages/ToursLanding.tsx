/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from '../components/TourCard';
import SearchAppBar from '../components/AppBar';

import cities from '../data/cities.json';
import { Typography } from '@mui/material';

export default function ToursLanding() {
  return (
    <div>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <React.Fragment>
            <Typography
              variant='h4'
              component='h2'
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={3}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}

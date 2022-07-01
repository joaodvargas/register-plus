import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import AccessTime from '@mui/icons-material/AccessTime';

import { createTheme, ThemeProvider } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

type TourCardProps = {
  tour: {
    id: number;
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
  };
};

const TourCard = ({ tour }: TourCardProps) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <CardImage src={tour.image} alt={tour.name} />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              <Link to={`/tour/${tour.id}`}>{tour.name}</Link>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTime
                sx={{
                  width: 12.5,
                }}
              />
              <Typography variant='body2' component='p' ml={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 3,
              }}
            >
              <Rating
                name='read-only'
                precision={0.5}
                value={tour.rating}
                size='small'
                readOnly
              />
              <Typography variant='body2' component='p' ml={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant='body3' component='p' ml={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' mt={0}>
                From ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;

// styled elements

const CardImage = styled.img`
  width: 100%;
  height: 5rem;
`;

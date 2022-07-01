/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import ImageCard from './ImageCard';

import places from '../data/places';
import useWindowPosition from '../hooks/useWindowPosition';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export default function PlaceToVisit() {
  const checked = useWindowPosition('header');
  return (
    <Root id='place-to-visit'>
      <ImageCard {...places[0]} checked={checked} />
      <ImageCard {...places[1]} checked={checked} />
    </Root>
  );
}

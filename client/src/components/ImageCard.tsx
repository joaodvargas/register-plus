/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

import sharedClasses from '../styles';

export interface ImageCardPlace {
  imageUrl: string;
  title: string;
  description: string;
  checked: boolean;
}

export default function ImageCard({
  imageUrl,
  title,
  description,
  checked,
}: ImageCardPlace) {
  return (
    <Collapse in={checked} timeout={1000}>
      <Card
        sx={{ maxWidth: 645, background: 'rgba(0,0,0,0.5)', margin: '20px' }}
      >
        <CardMedia component='img' height='400' image={imageUrl} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            css={[sharedClasses.defaultFont, sharedClasses.primaryColour]}
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            css={sharedClasses.defaultFont}
            sx={{
              fontSize: '1.1rem',
              color: '#ddd',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}

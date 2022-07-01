// this is required to use the css prop - see https://emotion.sh/docs/css-prop#jsx-pragma
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import bg from '../assets/bg.jpg';
import Header from '../components/Header';
import PlaceToVisit from '../components/PlaceToVisit';

export default function IslandLanding() {
  return (
    <React.Fragment>
      <div
        css={{
          minHeight: '100vh',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <PlaceToVisit />
      </div>
    </React.Fragment>
  );
}

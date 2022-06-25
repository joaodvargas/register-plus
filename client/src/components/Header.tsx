/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

import sharedClasses from '../styles';

// continue from https://youtu.be/rK0Lz8x7npA?t=823
const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  background: 'none',
}));

const HeaderDiv = ({ children }: { children?: React.ReactNode }) => (
  <div
    id='header'
    css={[
      sharedClasses.defaultFont,
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
    ]}
  >
    {children}
  </div>
);

export default function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <HeaderDiv>
      <CustomAppBar elevation={0}>
        <Toolbar
          css={{
            width: '80%',
            margin: '0 auto',
          }}
        >
          <h1
            css={{
              flexGrow: '1',
            }}
          >
            My
            <span css={sharedClasses.secondaryColour}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon
              css={[sharedClasses.primaryColour, { fontSize: '2rem' }]}
            />
          </IconButton>
        </Toolbar>
      </CustomAppBar>
      <Collapse in={checked} timeout={1000} collapsedSize={50}>
        <div
          css={{
            textAlign: 'center',
          }}
        >
          <h1 css={[sharedClasses.primaryColour, { fontSize: '4.5rem' }]}>
            Welcome to <br /> My{' '}
            <span css={sharedClasses.secondaryColour}>Island.</span>
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
            <IconButton>
              <ExpandMoreIcon
                css={[sharedClasses.secondaryColour, { fontSize: '4rem' }]}
              />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </HeaderDiv>
  );
}

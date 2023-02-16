import { Box, Typography } from '@mui/material';
import React from 'react';
import Branding from '../components/home/Branding';
import Brands from '../components/home/Brands';
import Services from '../components/home/Services';

const Home = () => {
  return (
    <Box>
      <Branding />
      <Brands />
      <Services />
    </Box>
  );
};

export default Home;

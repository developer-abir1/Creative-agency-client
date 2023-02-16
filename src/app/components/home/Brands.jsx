import { Box, styled } from '@mui/material';
import React from 'react';

const brands = [
  'https://i.ibb.co/hCq0Knh/image-7.png',
  'https://i.ibb.co/VHp8qC6/image-9-1.png',
  'https://i.ibb.co/x2F36JG/image-8.png',
  'https://i.ibb.co/sjZ2F1F/image-6.png',
  'https://i.ibb.co/ypJpmRT/image-5.png',
];

const BrandsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '4rem',

  '& > img': {
    width: '60px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    '& > img': {
      marginBottom: '1rem',
    },
  },
}));
const Brands = () => {
  return (
    <BrandsWrapper>
      {brands.map((brand, i) => (
        <img key={i} src={brand} alt="brand" />
      ))}
    </BrandsWrapper>
  );
};

export default Brands;

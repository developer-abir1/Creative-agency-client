import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBD062',
  height: '70vh',
  padding: theme.spacing(4),
  margin: '4rem  0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  clipPath: ' polygon(0 0, 100% 0, 100% 85%, 0 100%)',
  [theme.breakpoints.down('md')]: {
    '& > img': {
      display: 'none',
    },
  },
}));

const Branding = () => {
  return (
    <BrandingWrapper>
      <Stack spacing={2}>
        <Typography
          sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            lineHeight: '1.2',
          }}
        >
          Let’s Grow Your Brand To The Next Level
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{' '}
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: 'primary.main', color: 'white', width: '50%' }}
        >
          Hire Us
        </Button>
      </Stack>

      <Box sx={{ width: '50%' }}>
        <img
          src="https://i.ibb.co/B6j58Rq/Frame.png"
          style={{ width: '100%' }}
          alt="Frasdfame"
        />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;

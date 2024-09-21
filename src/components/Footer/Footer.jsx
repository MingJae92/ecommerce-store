import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', marginTop: '4rem', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary">
        © 2024 My Store. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Typography } from '@material-ui/core';
import { Share } from '@material-ui/icons';

export default function Logo() {
  return (
    <Typography variant="h5" display="block">
      <Share color="primary" sx={{ mr: 0.5 }} />
      Employee
      <Typography variant="h5" color="primary" sx={{ ml: 1 }}>
        Management
      </Typography>
    </Typography>
  );
}

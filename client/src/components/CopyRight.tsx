import React from 'react';
import { Typography, Link } from '@material-ui/core';

export const CopyRight = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright ©'}
    <Link color="inherit" href="#">
      Employee
      <Typography variant="body2" color="primary" display="inline">
        Management
      </Typography>
    </Link>
    {` ${new Date().getFullYear()}`}
  </Typography>
);

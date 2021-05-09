import React, { Fragment } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@material-ui/icons';
import { HiddenMenuIcon } from './HiddenMenuIcon';

export const GeneralAppBar = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  return (
    <AppBar position="static">
      <Toolbar style={{ paddingLeft: '15px' }}>
        <HiddenMenuIcon handleDrawerToggle={handleDrawerToggle} />
        <PageNavigation />
        <RouteDisplay />
      </Toolbar>
    </AppBar>
  );
};

const PageNavigation = () => {
  return (
    <Fragment>
      <IconButton color="inherit" aria-label="back arrow" edge="start">
        <ArrowBackIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="back arrow" edge="start">
        <ArrowForwardIcon />
      </IconButton>
    </Fragment>
  );
};

const RouteDisplay = () => (
  <Typography variant="subtitle1" noWrap>
    Cooling
  </Typography>
);

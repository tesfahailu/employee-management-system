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
import { SearchBar } from './SearchBarIcon';

export const GeneralAppBar = ({
  drawerWidth,
  handleDrawerToggle,
}: {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}) => {
  const classes = useStyles(drawerWidth);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar style={{ paddingLeft: '15px' }}>
        <HiddenMenuIcon handleDrawerToggle={handleDrawerToggle} />
        <PageNavigation />
        <RouteDisplay />
        <SearchBar />
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: (drawerWidth) => `calc(100% - ${drawerWidth}px)`,
        marginLeft: (drawerWidth) => drawerWidth,
      },
    },
  }),
);

import React from 'react';
import { IconButton, makeStyles, createStyles, Theme } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

export const HiddenMenuIcon = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  const classes = useStyles();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }),
);

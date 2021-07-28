import React from 'react';
import { IconButton } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
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

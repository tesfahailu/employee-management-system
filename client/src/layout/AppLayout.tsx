import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Drawer } from './components/Drawer';
import { GeneralAppBar } from './components/GeneralAppBar';
import { Grid } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  drawerWidth: number;
}

export function AppLayout({ children, drawerWidth }: Props) {
  const classes = useStyles(drawerWidth);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container className={classes.root} wrap="nowrap">
      <Grid item>
        <Drawer
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
        />
      </Grid>
      <Grid item container direction="column" xs>
        <Grid item>
          <GeneralAppBar handleDrawerToggle={handleDrawerToggle} />
        </Grid>
        <Grid item xs>
          <main className={classes.main}>{children}</main>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
    main: {
      padding: '20px',
      height: '100%',
    },
  }),
);
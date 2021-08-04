import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Drawer } from '../modules/components/Drawer';

interface Props {
  children?: React.ReactNode;
  drawerWidth: number;
}

export function AppLayout({ children, drawerWidth }: Props) {
  const classes = useStyles();
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
      <Grid
        item
        container
        direction="column"
        wrap="nowrap"
        xs
        sx={{ width: `calc(100vw - ${drawerWidth}px )` }}
      >
        <Grid item xs className={classes.mainWrapper}>
          <main className={classes.main}>{children}</main>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
  },
  mainWrapper: {
    overflowY: 'auto',
  },
  main: {
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(2),
  },
}));

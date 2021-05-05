import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Drawer } from './components/Drawer';
import { GeneralAppBar } from './components/GeneralAppBar';

interface Props {
  children?: React.ReactNode;
  drawerWidth: number;
}

export function AppLayout(props: Props) {
  const { children, drawerWidth } = props;
  const classes = useStyles(drawerWidth);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Drawer
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
      />
      <div>
        <GeneralAppBar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <div className={classes.appBarSpacing} />
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
      overflow: 'scroll',
    },
    main: {
      height: 'calc(100% - 65px)',
      padding: '20px',
      [theme.breakpoints.up('sm')]: {
        width: (drawerWidth: any) => `calc(100vw - ${drawerWidth}px )`,
      },
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
      },
      overflow: 'auto',
    },
    appBarSpacing: { width: '100%', height: '65px' },
  }),
);

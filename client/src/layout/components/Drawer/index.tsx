import React from 'react';
import {
  Drawer as MaterialDrawer,
  Hidden,
  useTheme,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { DrawerContent } from './DrawerContent';

interface StyleProps {
  width: number;
}

export const Drawer = ({
  handleDrawerToggle,
  mobileOpen,
  drawerWidth,
}: {
  handleDrawerToggle: () => void;
  mobileOpen: boolean | undefined;
  drawerWidth: number;
}) => {
  const props: StyleProps = {
    width: drawerWidth,
  };
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <MaterialDrawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerContent />
        </MaterialDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MaterialDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerContent />
        </MaterialDrawer>
      </Hidden>
    </nav>
  );
};

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: (props) => props.width as any,
        flexShrink: 0,
      },
      height: 'auto',
    },
    drawerPaper: {
      width: (props) => props.width as any,
    },
  }),
);

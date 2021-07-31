import React, { useEffect } from 'react';
import {
  Drawer as MaterialDrawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { StyledLogo } from './Logo';
import {
  Face as EmployeesIcon,
  Work as ProjectIcon,
  Business as OfficesIcon,
  Group as DepartmentIcon,
  Person as RolesIcon,
  Settings as SettingIcon,
} from '@material-ui/icons';
import { LogoutDialog } from './LogoutDialog';

const useDrawerStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
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

const useLinkStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: `${theme.palette.text.primary}`,
    },
  }),
);

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
  const classes = useDrawerStyles(props);
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
            keepMounted: true,
          }}
        >
          <DrawerContent />
        </MaterialDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
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

const DrawerContent = () => {
  const [selectedRoute, setSelectedRoute] = React.useState('');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const route = pathname.split('/');
    setSelectedRoute(route[1]);
  }, [location]);

  return (
    <List>
      <StyledLink to="/user">
        <ListItem key="logo" style={{ marginTop: 5 }}>
          <StyledLogo />
        </ListItem>
        <ListItem
          button
          key="user-settings"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <ListItemIcon>
            {/* <Avatar alt="image of user" src="/IMG_1191.JPG" /> */}
          </ListItemIcon>
          <ListItemText>SmarttyPants</ListItemText>
        </ListItem>
      </StyledLink>
      {[
        ['Employees', <EmployeesIcon />, '/employees'],
        ['Projects', <ProjectIcon />, '/projects/viewAll'],
        ['Offices', <OfficesIcon />, '/offices/viewAll'],
        ['Departments', <DepartmentIcon />, '/departments/ViewAll'],
        ['Roles', <RolesIcon />, '/roles/viewAll'],
        ['Settings', <SettingIcon />, '/settings'],
      ].map(([text, icon, route], index) => (
        <StyledLink to={route as string}>
          <ListItem
            button
            key={text + index.toString()}
            selected={selectedRoute === (route as string).split('/')[1]}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </StyledLink>
      ))}
      <LogoutDialog />
    </List>
  );
};

const StyledLink = ({
  children,
  ...other
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const classes = useLinkStyles();
  return (
    <Link className={classes.link} key={other.to.toString()} {...other}>
      {children}
    </Link>
  );
};

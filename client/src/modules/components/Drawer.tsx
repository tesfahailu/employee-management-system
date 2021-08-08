import React, { Fragment, useEffect } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Drawer as MaterialDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import {
  Face as EmployeesIcon,
  Work as ProjectIcon,
  Business as OfficesIcon,
  Group as DepartmentIcon,
  Person as RolesIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
} from '@material-ui/icons';
import { LogoutDialog } from './LogoutDialog';

const routesArray: Array<{ label: string; icon: JSX.Element; url: string }> = [
  { label: 'SmartyPants', icon: <Avatar>A</Avatar>, url: '/settings' },
  { label: 'Employees', icon: <EmployeesIcon />, url: '/employees' },
  { label: 'Projects', icon: <ProjectIcon />, url: '/projects' },
  { label: 'Offices', icon: <OfficesIcon />, url: '/offices' },
  { label: 'Departments', icon: <DepartmentIcon />, url: '/departments' },
  { label: 'Roles', icon: <RolesIcon />, url: '/roles' },
  { label: 'Logout', icon: <LogoutIcon />, url: '' },
];

const DrawerContent = ({ selectedRoute }: { selectedRoute: string }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);

  return (
    <Fragment>
      <Box sx={{ mt: 4, mb: 4, ml: 3 }}>
        <Logo />
      </Box>
      <List sx={{ p: 0 }}>
        {routesArray.map(({ label, icon, url }, index) =>
          label !== 'Logout' ? (
            <Link
              to={url}
              style={{ textDecoration: 'none', color: 'inherit' }}
              key={`label-${index}`}
            >
              <ListItem
                button
                selected={selectedRoute === url}
                sx={{
                  borderRadius: 1,
                  mx: 'auto',
                  width: '97%',
                  mb: index === 0 ? 2 : 0,
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ) : (
            <ListItem
              button
              key="logout"
              sx={{ borderRadius: 3, mx: 'auto', width: '97%' }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} onClick={handleClickOpen} />
            </ListItem>
          ),
        )}
      </List>
      <LogoutDialog open={open} setOpen={setOpen} />
    </Fragment>
  );
};

interface DrawerProp {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  drawerWidth: number;
}

export const Drawer = ({
  handleDrawerToggle,
  mobileOpen,
  drawerWidth,
}: DrawerProp) => {
  const [selectedRoute, setSelectedRoute] = React.useState('');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const route = pathname.split('/');
    setSelectedRoute(`/${route[1]}`);
  }, [location]);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            {routesArray.find(({ url }) => selectedRoute === url)?.label}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Settings">
            <IconButton color="inherit" aria-label="open drawer" edge="start">
              <Link
                to={routesArray[0].url}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <SettingsIcon />
              </Link>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: {
            md: drawerWidth,
          },
        }}
      >
        <MaterialDrawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerContent selectedRoute={selectedRoute} />
        </MaterialDrawer>
        <MaterialDrawer
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          variant="permanent"
          open
        >
          <DrawerContent selectedRoute={selectedRoute} />
        </MaterialDrawer>
      </Box>
    </Fragment>
  );
};

import React, { useEffect } from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { StyledLogo } from './../../../components/Logo';
import {
  Face as EmployeesIcon,
  Work as ProjectIcon,
  Business as OfficesIcon,
  Group as DepartmentIcon,
  Person as RolesIcon,
  Settings as SettingIcon,
} from '@material-ui/icons';
import { LogoutDialog } from './LogoutDialog';
import { Link, useLocation } from 'react-router-dom';

export const DrawerContent = () => {
  const [selectedRoute, setSelectedRoute] = React.useState('');

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const route = pathname.split('/');
    console.log(route);
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
        ['Employees', <EmployeesIcon />, '/employees/viewAll'],
        ['Projects', <ProjectIcon />, '/projects/viewAll'],
        ['Offices', <OfficesIcon />, '/offices'],
        ['Departments', <DepartmentIcon />, '/departments'],
        ['Roles', <RolesIcon />, '/roles'],
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

export const StyledLink = ({
  children,
  ...other
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const classes = useStyles();
  return (
    <Link className={classes.link} key={other.to.toString()} {...other}>
      {children}
    </Link>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: 10,
    },
    link: {
      textDecoration: 'none',
      color: `${theme.palette.text.primary}`,
    },
  }),
);

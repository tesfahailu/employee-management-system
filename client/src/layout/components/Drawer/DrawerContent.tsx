import React, { useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { StyledLogo } from './../../../components/Logo';
import {
  QueueMusic as QueueMusicIcon,
  Album as AlbumIcon,
  Audiotrack as AudiotrackIcon,
  Mic as MicIcon,
  AddCircle as AddCircleIcon,
} from '@material-ui/icons';
import { DropDownMenu } from './DropDownMenu';
import PlaylistDialog from './PlayListDialog';
import { Link, useLocation } from 'react-router-dom';

export const DrawerContent = () => {
  const classes = useStyles();
  const [selectedRoute, setSelectedRoute] = React.useState('');

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const route = pathname.split('/');
    setSelectedRoute('/' + route[route.length - 1]);
    console.log('Is this running');
  }, [location]);

  return (
    <List>
      <ListItem key="logo">
        <ListItemIcon>
          <StyledLogo />
        </ListItemIcon>
      </ListItem>
      <ListItem button key="user-settings">
        <DropDownMenu />
      </ListItem>
      <StyledLink to="/home">
        <ListItem button key="home" selected={selectedRoute === '/home'}>
          <ListItemText primary="Home" />
        </ListItem>
      </StyledLink>
      <ListSubheader component="div" id="nested-list-subheader-collection">
        My Collection
      </ListSubheader>
      {[
        ['Playlists', <QueueMusicIcon />, '/playlists'],
        ['Albums', <AlbumIcon />, '/albums'],
        ['Tracks', <AudiotrackIcon />, '/tracks'],
        ['Artists', <MicIcon />, '/artists'],
      ].map(([text, icon, route], index) => (
        <StyledLink to={route as string}>
          <ListItem
            button
            key={text + index.toString()}
            selected={selectedRoute === route}
          >
            <ListItemIcon style={{ minWidth: 40 }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </StyledLink>
      ))}
      <ListSubheader component="div" id="nested-list-subheader-playlist">
        My Playlists
      </ListSubheader>
      <ListItem button>
        <AddCircleIcon className={classes.icon} />
        <PlaylistDialog />
      </ListItem>
      {[
        { id: 'sleep', name: 'Sleep' },
        { id: 'cool', name: 'Cool' },
        { id: 'gym_workout', name: 'Gym Workout' },
      ].map(({ id, name }, index) => (
        <StyledLink to="">
          <ListItem button key={id}>
            <ListItemText primary={name} />
          </ListItem>
        </StyledLink>
      ))}
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
    <Link className={classes.link} {...other}>
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

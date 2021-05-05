import React, { useRef } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, ListItemText, Grid, Avatar } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

const StyledMenuItem = React.forwardRef(
  ({ children }: { children: React.ReactNode }, ref) => {
    const classes = useStyles();
    return <MenuItem className={classes.root}>{children}</MenuItem>;
  },
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
    userAvatar: {
      paddingLeft: 5,
    },
  }),
);

export const DropDownMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const optionRef = useRef(null);

  const handleClick = () => {
    console.log('Did this run');
    setAnchorEl(optionRef.current);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    console.log('Trying to close', anchorEl);
    setAnchorEl(null);
    event.stopPropagation();
  };

  return (
    <Grid
      container
      alignItems="flex-end"
      // justifyContent="space-between"
      className={classes.userAvatar}
      onClick={handleClick}
    >
      <Grid item>
        <Avatar alt="image of user" src="/IMG_1191.JPG" />
      </Grid>
      <Grid item>
        <MoreHorizIcon ref={optionRef} />
        <Menu
          className={classes.paper}
          id="customized-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <StyledMenuItem>
            <ListItemText secondary="Settings" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText secondary="Logout" />
          </StyledMenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

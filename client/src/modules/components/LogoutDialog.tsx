import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  ListItemText,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {
  Close as CloseIcon,
  ExitToApp as LogoutIcon,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { setAccessToken } from '../../services/session/accessToken';
import { useLogoutMutation } from '../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      minWidth: 400,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    rootDialogContent: {
      padding: theme.spacing(2),
      paddingTop: 0,
    },
    rootDialogActions: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();
  return (
    <MuiDialogTitle className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          size="large"
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

export interface DialogContentProps {
  id: string;
  children?: React.ReactNode;
  dividers?: boolean | undefined;
}

const DialogContent = (props: DialogContentProps) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <MuiDialogContent className={classes.rootDialogContent} {...other}>
      {children}
    </MuiDialogContent>
  );
};

const DialogActions = ({ children }: { children?: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <MuiDialogActions className={classes.rootDialogActions}>
      {children}
    </MuiDialogActions>
  );
};

export function LogoutDialog() {
  const [open, setOpen] = React.useState(false);
  const [logout, { client }] = useLogoutMutation();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    handleClose();
    await logout();
    setAccessToken('');
    await client.resetStore();
    history.push('/login');
  };

  return (
    <div>
      <ListItem button key="logout">
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" onClick={handleClickOpen} />
      </ListItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Logout
        </DialogTitle>
        <DialogContent id="customized-dialog-content">
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

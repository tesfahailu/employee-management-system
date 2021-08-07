import * as React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Close as CloseIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { setAccessToken } from '../../services/session/accessToken';
import { useLogoutMutation } from '../../generated/graphql';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function LogoutDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [logout, { client }] = useLogoutMutation();
  const history = useHistory();

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
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle
        id="customized-dialog-title"
        sx={{ m: 0, padding: 2, minWidth: 400 }}
      >
        <Typography variant="h6">Logout</Typography>
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 1,
            top: 1,
            color: 'text.secondary',
          }}
          onClick={handleClose}
          size="large"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent id="customized-dialog-content" sx={{ p: 2, pt: 0 }}>
        <Typography>Are you sure you want to logout?</Typography>
      </DialogContent>
      <DialogActions sx={{ m: 0, p: 1 }}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
}

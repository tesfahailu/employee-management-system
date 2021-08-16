import React from 'react';
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
import { DialogDeleteRowsText } from '../../text';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogDeleteRows({
  open,
  setOpen,
  handleDeleteRows,
  selected,
  setSelected,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selected: readonly number[];
  setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>;
  handleDeleteRows: (
    selected: readonly number[],
    setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => React.MouseEventHandler<HTMLButtonElement>;
}) {
  const handleClose = () => {
    setOpen(false);
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
        <Typography>{DialogDeleteRowsText.Body}</Typography>
      </DialogContent>
      <DialogActions sx={{ m: 0, p: 1 }}>
        <Button
          onClick={handleDeleteRows(selected, setSelected, setOpen)}
          color="primary"
          variant="text"
        >
          {DialogDeleteRowsText.Accept}
        </Button>
        <Button onClick={handleClose}>{DialogDeleteRowsText.Decline}</Button>
      </DialogActions>
    </Dialog>
  );
}

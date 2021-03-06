import React, { useState } from 'react';
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
import { DialogDeleteRowText } from '../../text';
import { HandleDeleteRow } from '../../types/types';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSnackBar: React.Dispatch<
    React.SetStateAction<{ open: boolean; success: boolean }>
  >;
  rowId: number | null;
  handleDeleteRow: HandleDeleteRow;
}

export function DialogDeleteRow({
  open,
  setOpen,
  setOpenSnackBar,
  rowId,
  handleDeleteRow,
}: DialogProp) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          <Typography>{DialogDeleteRowText.Body}</Typography>
        </DialogContent>
        <DialogActions sx={{ m: 0, p: 1 }}>
          <Button
            onClick={handleDeleteRow(rowId!, setOpen, setOpenSnackBar)}
            color="primary"
            variant="text"
          >
            {DialogDeleteRowText.Accept}
          </Button>
          <Button onClick={handleClose}>{DialogDeleteRowText.Decline}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

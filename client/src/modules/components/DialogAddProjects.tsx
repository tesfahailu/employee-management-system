import React, { MouseEvent } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Close as CloseIcon } from '@material-ui/icons';
import { Project } from '../../types/types';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogAddProject({
  open,
  setOpen,
  projectsList,
  onProjectAdd,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectsList: Project[];
  onProjectAdd: (
    index: number,
  ) => (event: MouseEvent<HTMLInputElement>) => void;
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
        <Typography variant="h6">Add Project</Typography>
        <Typography variant="subtitle2">
          {`Select a project to add ${'Michael'}.`}
        </Typography>
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
        <List>
          {projectsList.map(({ id, name }) => (
            <ListItem button key={`${name}-${id}`} onClick={onProjectAdd(id)}>
              <Typography>{name}</Typography>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions sx={{ m: 0, p: 1 }}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

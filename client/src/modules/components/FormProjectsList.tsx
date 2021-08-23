import {
  Card,
  CardContent,
  Typography,
  List,
  Divider,
  ListItem,
  IconButton,
  ListItemText,
  Button,
  Box,
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import React, { Fragment } from 'react';
import { FormProjectsListText } from '../../text';
import { ProjectsListForm } from '../../types/types';
import { DialogAddProject } from './DialogAddProjects';

export const FormProjectsList = ({
  projects,
  open,
  setOpen,
  onProjectAdd,
  onProjectRemove,
  projectsList,
}: ProjectsListForm) => (
  <Fragment>
    <Card>
      <CardContent>
        <Typography variant="h6"> {FormProjectsListText.Header}</Typography>
        <List dense={true}>
          {projects.length > 0 ? (
            projects.map(({ id, name, description }) => (
              <Box key={`${name}-${id}`} component="div">
                <Divider />
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      component="div"
                      onClick={onProjectRemove(id!)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={name}
                    secondary={description ? description : null}
                  />
                </ListItem>
                <Divider />
              </Box>
            ))
          ) : (
            <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
              {FormProjectsListText.ListEmpty}
            </Typography>
          )}
        </List>
        <Button
          variant="text"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          {FormProjectsListText.ButtonAdd}
        </Button>
      </CardContent>
    </Card>
    <DialogAddProject
      open={open}
      setOpen={setOpen}
      projectsList={projectsList}
      onProjectAdd={onProjectAdd}
    />
  </Fragment>
);

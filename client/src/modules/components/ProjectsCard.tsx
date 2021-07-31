import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { EditEmployeePageText } from '../../text';
import { EditProjectsType } from '../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(1),
    },
  }),
);

export const ProjectsCard = ({
  projects,
  onProjectChange,
}: EditProjectsType) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h6">
            {EditEmployeePageText.ProjectsText}
          </Typography>
        }
      />
      <CardContent>
        {projects!.map(({ id, name, description }) => {
          return (
            <div key={`text-section-${id}`}>
              <TextField
                margin="normal"
                fullWidth
                key={`${id}-name`}
                label="Name:"
                value={name}
                onChange={onProjectChange(id, 'name')}
              />
              <TextField
                margin="normal"
                fullWidth
                key={`${id}-description`}
                label="Description:"
                value={description}
                onChange={onProjectChange(id, 'description')}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

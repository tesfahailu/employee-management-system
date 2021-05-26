import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { EditEmployeePageText } from '../../../text';
import { EditProjectsType } from '../../../types/types';

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
                variant="outlined"
                margin="normal"
                fullWidth
                key={`${id}-name`}
                label="Name:"
                value={name}
                onChange={onProjectChange(id, 'name')}
                color="primary"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                key={`${id}-description`}
                label="Description:"
                value={description}
                onChange={onProjectChange(id, 'description')}
                color="primary"
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      marginBottom: '1REM',
    },
  }),
);

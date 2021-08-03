import {
  Box,
  Card,
  CardContent,
  Grid,
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

export const CardProjects = ({
  projects,
  onProjectChange,
}: EditProjectsType) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle1">
          {EditEmployeePageText.ProjectsText}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {projects!.map(({ id, name, description }) => {
            return (
              <div key={`text-section-${id}`}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      key={`${id}-name`}
                      label="Name:"
                      value={name}
                      onChange={onProjectChange(id, 'name')}
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      margin="normal"
                      fullWidth
                      key={`${id}-description`}
                      label="Description:"
                      value={description}
                      onChange={onProjectChange(id, 'description')}
                    />
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

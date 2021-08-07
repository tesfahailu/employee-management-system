import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { EditEmployeePageText } from '../../text';
import { CreateProjectType, ProjectType } from '../../types/types';

export const FormProjects = ({
  project,
  onProjectChange,
}: Partial<CreateProjectType>) => {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {EditEmployeePageText.ProjectsText}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Project project={project} onProjectChange={onProjectChange} />
        </Box>
      </CardContent>
    </Card>
  );
};

const Project: React.FC<Partial<CreateProjectType>> = ({
  project,
  onProjectChange,
}) => {
  const { name, description } = project!;
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          fullWidth
          key={'name'}
          label="Name:"
          value={name}
          onChange={onProjectChange!('name')}
        />
      </Grid>
      <Grid item xs>
        <TextField
          margin="normal"
          fullWidth
          key={'description'}
          label="Description:"
          value={description}
          onChange={onProjectChange!('description')}
        />
      </Grid>
    </Grid>
  );
};

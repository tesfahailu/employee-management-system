import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { FormProjectText } from '../../text';
import { Project, FormProject as Type } from '../../types/types';

const Project = ({ project: { name, description }, onProjectChange }: Type) => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <TextField
        name="name"
        margin="normal"
        fullWidth
        key="name"
        label={FormProjectText.NameLabel}
        value={name}
        onChange={onProjectChange}
      />
    </Grid>
    <Grid item xs>
      <TextField
        name="description"
        margin="normal"
        fullWidth
        key="description"
        label={FormProjectText.DescriptionLabel}
        value={description}
        onChange={onProjectChange}
      />
    </Grid>
  </Grid>
);

export const FormProject = ({ project, onProjectChange }: Type) => {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="h6">{FormProjectText.Header}</Typography>
        <Box sx={{ mt: 2 }}>
          <Project project={project} onProjectChange={onProjectChange} />
        </Box>
      </CardContent>
    </Card>
  );
};

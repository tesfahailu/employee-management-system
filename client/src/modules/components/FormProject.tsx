import { Box, Paper, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { FormProjectText } from '../../text';
import { FormProject as Type } from '../../types/types';

export const FormProject = ({
  project,
  errors,
  onChange,
  onErrorChange,
}: Type) => {
  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Typography variant="h6">{FormProjectText.Header}</Typography>
      <Box sx={{ mt: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            name="name"
            margin="normal"
            fullWidth
            key="name"
            label={FormProjectText.NameLabel}
            value={project.name}
            onChange={onChange}
            onBlur={onErrorChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs>
          <TextField
            name="description"
            margin="normal"
            fullWidth
            key="description"
            label={FormProjectText.DescriptionLabel}
            value={project.description}
            onChange={onChange}
            onBlur={onErrorChange}
            error={!!errors.description}
            helperText={errors.description}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

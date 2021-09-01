import { Box, Paper, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { FormDepartmentText } from '../../text';
import { Department, FormDepartment as Type } from '../../types/types';

export const FormDepartment = ({
  department,
  errors,
  onChange,
  onErrorChange,
}: Type<Department>) => (
  <Paper sx={{ mb: 2, p: 2 }}>
    <Typography variant="h6">{FormDepartmentText.Header}</Typography>
    <Box sx={{ mt: 2 }} />
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          name="name"
          margin="normal"
          fullWidth
          id="name"
          label={FormDepartmentText.NameLabel}
          value={department.name}
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
          id="description"
          label={FormDepartmentText.DescriptionLabel}
          value={department.description}
          onChange={onChange}
          onBlur={onErrorChange}
          error={!!errors.description}
          helperText={errors.description}
        />
      </Grid>
    </Grid>
  </Paper>
);

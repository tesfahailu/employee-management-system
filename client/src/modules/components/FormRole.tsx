import { Box, Paper, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { FormRoleText } from '../../text';
import { Role, FormRole as Type } from '../../types/types';

export const FormRole = ({
  role,
  errors,
  onChange,
  onErrorChange,
}: Type<Role>) => {
  const { name, description } = role!;
  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Typography variant="h6">{FormRoleText.Header}</Typography>
      <Box sx={{ mt: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            name="name"
            margin="normal"
            fullWidth
            key={'name'}
            label={FormRoleText.NameLabel}
            value={name}
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
            key={'description'}
            label={FormRoleText.DescriptionLabel}
            value={description}
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

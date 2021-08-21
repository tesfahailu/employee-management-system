import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { FormDepartmentText } from '../../text';
import { Department, DepartmentForm } from '../../types/types';

export const FormDepartment = ({
  department,
  onDepartmentChange,
}: DepartmentForm<Omit<Department, 'id'>>) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{FormDepartmentText.Header}</Typography>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              name="name"
              margin="normal"
              fullWidth
              key={'name'}
              value={department.name}
              onChange={onDepartmentChange}
              label={FormDepartmentText.NameLabel}
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
              onChange={onDepartmentChange}
            />
          </Grid>
        </Grid>
      </Box>
    </CardContent>
  </Card>
);

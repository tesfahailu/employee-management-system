import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { EmployeeEditPageText } from '../../text';
import { Role, RoleForm } from '../../types/types';

export const FormRole = ({
  role,
  onRoleChange,
}: RoleForm<Omit<Role, 'id'>>) => {
  const { name, description } = role!;
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{EmployeeEditPageText.Projects}</Typography>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                name="name"
                margin="normal"
                fullWidth
                key={'name'}
                label="Name:"
                value={name}
                onChange={onRoleChange}
              />
            </Grid>
            <Grid item xs>
              <TextField
                name="description"
                margin="normal"
                fullWidth
                key={'description'}
                label="Description:"
                value={description}
                onChange={onRoleChange}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

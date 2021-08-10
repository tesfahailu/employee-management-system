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
import { RolePageCreate, RolePageEdit } from '../../types/types';

export const FormRole = ({
  role,
  onRoleChange,
}: Partial<RolePageEdit | RolePageCreate>) => {
  const { name, description } = role!;
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {EditEmployeePageText.ProjectsText}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                margin="normal"
                fullWidth
                key={'name'}
                label="Name:"
                value={name}
                onChange={onRoleChange!('name')}
              />
            </Grid>
            <Grid item xs>
              <TextField
                margin="normal"
                fullWidth
                key={'description'}
                label="Description:"
                value={description}
                onChange={onRoleChange!('description')}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

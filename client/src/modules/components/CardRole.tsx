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
import { CreateRoleType } from '../../types/types';

export const CardRole = ({ role, onRoleChange }: Partial<CreateRoleType>) => {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {EditEmployeePageText.ProjectsText}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Role role={role} onRoleChange={onRoleChange} />
        </Box>
      </CardContent>
    </Card>
  );
};

const Role: React.FC<Partial<CreateRoleType>> = ({ role, onRoleChange }) => {
  const { name, description } = role!;
  return (
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
  );
};

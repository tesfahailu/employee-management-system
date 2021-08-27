import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { FormEmployeeText } from '../../text';
import { Employee, FormEmployee as Type } from '../../types/types';
import { SelectComponent } from './SelectComponent';

const types = [
  { description: 'Permenant', name: 'Permenant', id: 0 },
  { description: 'Contract', name: 'Contract', id: 1 },
  { description: 'FullTime', name: 'Full Time', id: 2 },
  { description: 'PartTime', name: 'Part Time', id: 3 },
];

export function FormEmployee<R extends Omit<Employee, 'id'>>(props: Type<R>) {
  const {
    employee,
    errors,
    onChange,
    onErrorChange,
    showButton = false,
    isValid = false,
    isChanged = false,
    onSave = () => {},
  } = props;

  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Grid container justifyContent="space-between">
        <Typography variant="h6">{FormEmployeeText.Header}</Typography>
        {showButton && (
          <Button disabled={!isValid || !isChanged} onClick={onSave}>
            {FormEmployeeText.SaveButton}
          </Button>
        )}
      </Grid>
      <Box sx={{ mt: 2 }} />
      <TextField
        name="firstName"
        margin="normal"
        fullWidth
        id="firstName"
        label={FormEmployeeText.FirstName}
        value={employee.firstName}
        onChange={onChange}
        onBlur={onErrorChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        name="lastName"
        margin="normal"
        fullWidth
        id="lastName"
        label={FormEmployeeText.LastName}
        value={employee.lastName}
        onChange={onChange}
        onBlur={onErrorChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <TextField
        name="mobile"
        margin="normal"
        fullWidth
        id="mobile"
        label={FormEmployeeText.Mobile}
        value={employee.mobile}
        onChange={onChange}
        onBlur={onErrorChange}
        error={!!errors.mobile}
        helperText={errors.mobile}
      />
      <TextField
        name="email"
        margin="normal"
        fullWidth
        id="email"
        label={FormEmployeeText.Email}
        value={employee.email}
        onChange={onChange}
        onBlur={onErrorChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      {employee.type && (
        <SelectComponent
          name="type"
          labelText={FormEmployeeText.Type}
          onChange={onChange}
          onErrorChange={onErrorChange}
          value={employee.type}
          options={types}
          error={errors.type!}
        />
      )}
    </Paper>
  );
}

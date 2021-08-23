import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { EmployeeEditPageText, FormEmployeeText } from '../../text';
import { Employee, EmployeeForm } from '../../types/types';

const types = [
  { value: 'Permenant', text: 'Permenant' },
  { value: 'Contract', text: 'Contract' },
  { value: 'FullTime', text: 'Full Time' },
  { value: 'PartTime', text: 'Part Time' },
];

export function FormEmployee<R extends Omit<Employee, 'id'>>(
  props: EmployeeForm<R>,
) {
  const { employee, employeeErrors: errors, onChange, onErrorChange } = props;
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{FormEmployeeText.Header}</Typography>
        <Box sx={{ mt: 2 }}>
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
            <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
              <InputLabel htmlFor="outlined-type-native-simple">
                {FormEmployeeText.Type}
              </InputLabel>
              <Select
                native
                onChange={onErrorChange}
                label={FormEmployeeText.Type}
                inputProps={{
                  name: 'type',
                  id: 'outlined-type-native-simple',
                }}
              >
                {types.map(({ value, text }, index) => (
                  <option value={value} key={`${value}-${index}`}>
                    {text}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

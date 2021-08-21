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
import { EmployeeEditPageText } from '../../text';
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
  const { employee, employeeErrors: errors, onEmployeeInfoChange } = props;
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {EmployeeEditPageText.EmployeeInfo}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            name="firstName"
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name:"
            onBlur={onEmployeeInfoChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            name="lastName"
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name:"
            onBlur={onEmployeeInfoChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            name="mobile"
            margin="normal"
            fullWidth
            id="mobile"
            label="Mobile:"
            onBlur={onEmployeeInfoChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
          />
          <TextField
            name="email"
            margin="normal"
            fullWidth
            id="email"
            label="Email:"
            onBlur={onEmployeeInfoChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          {employee.type && (
            <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
              <InputLabel htmlFor="outlined-type-native-simple">
                Type:
              </InputLabel>
              <Select
                native
                onChange={onEmployeeInfoChange}
                label="Type"
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

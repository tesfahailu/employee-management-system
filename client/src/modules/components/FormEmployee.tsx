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
import { EditEmployeePageText } from '../../text';
import { EditEmployeeInfoType } from '../../types/types';

const types = [
  { value: 'Permenant', text: 'Permenant' },
  { value: 'Contract', text: 'Contract' },
  { value: 'FullTime', text: 'Full Time' },
  { value: 'PartTime', text: 'Part Time' },
];

export const FormEmployee = ({
  employee,
  onEmployeeInfoChange,
}: EditEmployeeInfoType) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">
        {EditEmployeePageText.EmployeeInfoText}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          margin="normal"
          fullWidth
          id="firstName"
          label="First Name:"
          value={employee!.firstName}
          onChange={onEmployeeInfoChange('firstName')}
        />
        <TextField
          margin="normal"
          fullWidth
          id="lastName"
          label="Last Name:"
          value={employee!.lastName}
          onChange={onEmployeeInfoChange('lastName')}
        />
        <TextField
          margin="normal"
          fullWidth
          id="mobile"
          label="Mobile:"
          value={employee!.mobile}
          onChange={onEmployeeInfoChange('mobile')}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email:"
          value={employee!.email}
          onChange={onEmployeeInfoChange('email')}
        />
        {employee.type && (
          <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
            <InputLabel htmlFor="outlined-type-native-simple">Type:</InputLabel>
            <Select
              native
              value={employee.type}
              onChange={onEmployeeInfoChange('type')}
              label="Type"
              inputProps={{
                name: 'type',
                id: 'outlined-type-native-simple',
              }}
            >
              {types.map(({ value, text }) => (
                <option value={value}>{text}</option>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
    </CardContent>
  </Card>
);

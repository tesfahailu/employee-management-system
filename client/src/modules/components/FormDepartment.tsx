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
import { FormDepartmentText } from '../../text';
import { DepartmentFormCreate } from '../../types/types';

const departmentName = [
  { name: 'marketing', label: 'Marketing' },
  { name: 'operations', label: 'Operations' },
  { name: 'finance', label: 'Finance' },
  { name: 'sales', label: 'Sales' },
  { name: 'humanresources', label: 'Human Resources' },
  { name: 'product', label: 'Product' },
];

export const FormDepartment = ({
  department,
  onDepartmentChange,
}: DepartmentFormCreate) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{FormDepartmentText.HeaderText}</Typography>
      <Box sx={{ mt: 2 }}>
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
          <InputLabel htmlFor="outlined-title-native-simple">
            {FormDepartmentText.NameLabel}
          </InputLabel>
          <Select
            native
            value={department.name}
            onChange={onDepartmentChange('name')}
            label={FormDepartmentText.NameLabel}
            inputProps={{
              name: 'type',
              id: 'outlined-name-native-simple',
            }}
          >
            {departmentName.map(({ name, label }) => (
              <option value={name}>{label}</option>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          fullWidth
          id="description"
          label={FormDepartmentText.DescriptionLabel}
          value={department.description}
          onChange={onDepartmentChange('description')}
        />
      </Box>
    </CardContent>
  </Card>
);

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
import { EditEmployeeDepartmentType } from '../../types/types';

const departmentTitle = [
  { value: 'Marketing', text: 'Marketing' },
  { value: 'Operations', text: 'Operations' },
  { value: 'Finance', text: 'Finance' },
  { value: 'Sales', text: 'Sales' },
  { value: 'HumanResources', text: 'Human Resources' },
  { value: 'Product', text: 'Product' },
];

export const FormDepartment = ({
  department,
  onDepartmentChange,
}: EditEmployeeDepartmentType) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">
        {EditEmployeePageText.DepartmentText}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
          <InputLabel htmlFor="outlined-title-native-simple">Title:</InputLabel>
          <Select
            native
            value={department.title}
            onChange={onDepartmentChange('title')}
            label="Title:"
            inputProps={{
              name: 'type',
              id: 'outlined-name-native-simple',
            }}
          >
            {departmentTitle.map(({ value, text }) => (
              <option value={value}>{text}</option>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          fullWidth
          id="description"
          label="Description:"
          value={department.description}
          onChange={onDepartmentChange('description')}
        />
      </Box>
    </CardContent>
  </Card>
);

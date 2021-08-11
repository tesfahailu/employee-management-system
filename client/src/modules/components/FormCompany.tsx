import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import React from 'react';
import { FormCompanyText } from '../../text';
import { CompanyForm } from '../../types/types';

export const FormCompany = ({
  office,
  onOfficeChange,
  officesList,
  department,
  onDepartmentChange,
  departmentsList,
  role,
  onRoleChange,
  rolesList,
}: CompanyForm) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {FormCompanyText.Header}
      </Typography>
      <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
        <InputLabel htmlFor="outlined-office-native-simple">
          {FormCompanyText.OfficeLabel}
        </InputLabel>
        <Select
          native
          value={office.name}
          onChange={onOfficeChange('name')}
          label={FormCompanyText.OfficeLabel}
          inputProps={{
            name: 'office',
            id: 'outlined-office-native-simple',
          }}
        >
          {officesList.map(({ name }) => (
            <option value={name}>{name}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
        <InputLabel htmlFor="outlined-department-native-simple">
          {FormCompanyText.DepartmentLabel}
        </InputLabel>
        <Select
          native
          value={department.name}
          onChange={onDepartmentChange('name')}
          label={FormCompanyText.DepartmentLabel}
          inputProps={{
            name: 'department',
            id: 'outlined-department-native-simple',
          }}
        >
          {departmentsList.map(({ name }) => (
            <option value={name}>{name}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
        <InputLabel htmlFor="outlined-role-native-simple">
          {FormCompanyText.RoleLabel}
        </InputLabel>
        <Select
          native
          value={role.name}
          onChange={onRoleChange('name')}
          label={FormCompanyText.RoleLabel}
          inputProps={{
            name: 'role',
            id: 'outlined-role-native-simple',
          }}
        >
          {rolesList.map(({ name }) => (
            <option value={name}>{name}</option>
          ))}
        </Select>
      </FormControl>
    </CardContent>
  </Card>
);

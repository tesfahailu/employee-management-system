import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { FormCompanyText } from '../../text';
import { FormCompany as Type } from '../../types/types';
import { SelectComponent } from './SelectComponent';

export const FormCompany = ({
  company,
  errors,
  onCompanyChange,
  onErrorChange,
  officesList,
  departmentsList,
  rolesList,
}: Type) => {
  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Typography variant="h6">{FormCompanyText.Header}</Typography>
      <Box sx={{ mb: 2 }} />
      <SelectComponent
        name="office"
        labelText={FormCompanyText.OfficeLabel}
        onChange={onCompanyChange}
        onErrorChange={onErrorChange}
        value={company.office}
        options={officesList}
        error={errors.office}
      />
      <SelectComponent
        name="department"
        labelText={FormCompanyText.DepartmentLabel}
        onChange={onCompanyChange}
        onErrorChange={onErrorChange}
        value={company.department}
        options={departmentsList}
        error={errors.department}
      />
      <SelectComponent
        name="role"
        labelText={FormCompanyText.RoleLabel}
        onChange={onCompanyChange}
        onErrorChange={onErrorChange}
        value={company.role}
        options={rolesList}
        error={errors.role}
      />
    </Paper>
  );
};

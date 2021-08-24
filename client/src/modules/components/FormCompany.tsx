import { Card, CardContent, Typography } from '@material-ui/core';
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
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {FormCompanyText.Header}
        </Typography>
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
      </CardContent>
    </Card>
  );
};

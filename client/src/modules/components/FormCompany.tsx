import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { FormCompanyText } from '../../text';
import { CompanyForm } from '../../types/types';
import { SelectComponent } from './SelectComponent';

export const FormCompany = ({
  company,
  companyErrors,
  onCompanyChange,
  officesList,
  departmentsList,
  rolesList,
}: CompanyForm) => {
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
          value={company.office}
          options={officesList}
          error={companyErrors.office}
        />
        <SelectComponent
          name="department"
          labelText={FormCompanyText.OfficeLabel}
          onChange={onCompanyChange}
          value={company.department}
          options={departmentsList}
          error={companyErrors.department}
        />
        <SelectComponent
          name="role"
          labelText={FormCompanyText.RoleLabel}
          onChange={onCompanyChange}
          value={company.role}
          options={rolesList}
          error={companyErrors.role}
        />
      </CardContent>
    </Card>
  );
};

import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateEmployeePageText } from '../../../text';
import { EmployeePageCreate } from '../../../types/types';
import { FormDepartment } from '../../../modules/components/FormDepartment';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { FormOffice } from '../../../modules/components/FormOffice';
import { PageHeader } from '../../../modules/components/PageHeader';

export const CreatePresentation: React.FC<EmployeePageCreate> = ({
  employee,
  onEmployeeInfoChange,
  department,
  onDepartmentChange,
  employeeAddress,
  onEmployeeAddressChange,
  officeAddress,
  onOfficeAddressChange,
  projects,
  onProjectChange,
  isFormComplete,
  saveChanges,
}) => (
  <Fragment>
    <PageHeader
      title={CreateEmployeePageText.PageHeaderText}
      subtitle={CreateEmployeePageText.PageSubHeaderText}
      isButton={false}
    />
    <FormEmployee
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
    />
    <FormDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
    <FormEmployeeAddress
      address={employeeAddress}
      onAddressChange={onEmployeeAddressChange}
    />
    <FormOffice
      address={officeAddress}
      onAddressChange={onOfficeAddressChange}
    />
    {/* <FormProject projects={projects} onProjectChange={onProjectChange} /> */}
    <Button
      sx={{ mb: 1, mr: 1 }}
      disabled={!isFormComplete}
      onClick={saveChanges}
    >
      {CreateEmployeePageText.SaveButtonText}
    </Button>
  </Fragment>
);

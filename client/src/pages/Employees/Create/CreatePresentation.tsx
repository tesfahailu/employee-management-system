import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateEmployeePageText } from '../../../text';
import { Employee, EmployeePageCreate } from '../../../types/types';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormCompany } from '../../../modules/components/FormCompany';
import { FormProjectsList } from '../../../modules/components/FormProjectsList';

export const CreatePresentation = ({
  employee,
  onEmployeeInfoChange,
  address,
  onAddressChange,
  office,
  onOfficeChange,
  officesList,
  department,
  onDepartmentChange,
  departmentsList,
  role,
  onRoleChange,
  rolesList,
  projects,
  onProjectAdd,
  onProjectRemove,
  projectsList,
  isFormComplete,
  open,
  setOpen,
  saveChanges,
}: EmployeePageCreate) => (
  <Fragment>
    <PageHeader
      title={CreateEmployeePageText.PageHeaderText}
      subtitle={CreateEmployeePageText.PageSubHeaderText}
      isButton={false}
    />
    <FormEmployee<Omit<Employee, 'id'>>
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
    />
    <FormEmployeeAddress address={address} onAddressChange={onAddressChange} />
    <FormCompany
      office={office}
      onOfficeChange={onOfficeChange}
      officesList={officesList}
      department={department}
      onDepartmentChange={onDepartmentChange}
      departmentsList={departmentsList}
      role={role}
      onRoleChange={onRoleChange}
      rolesList={rolesList}
    />
    <FormProjectsList
      projects={projects}
      onProjectAdd={onProjectAdd}
      onProjectRemove={onProjectRemove}
      projectsList={projectsList}
      open={open}
      setOpen={setOpen}
    />
    <Button
      sx={{ mb: 1, mr: 1 }}
      disabled={!isFormComplete}
      onClick={saveChanges}
    >
      {CreateEmployeePageText.SaveButtonText}
    </Button>
  </Fragment>
);

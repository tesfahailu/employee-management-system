import { Box, Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { PageHeader } from '../../../modules/components/PageHeader';
import { EditEmployeePageText } from '../../../text';
import { Employee, EmployeePageEdit } from '../../../types/types';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { FormCompany } from '../../../modules/components/FormCompany';
import { FormProjectsList } from '../../../modules/components/FormProjectsList';

export const EditPresentation = ({
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
  isFormChanged,
  open,
  setOpen,
  saveChanges,
}: EmployeePageEdit) => {
  return (
    <Fragment>
      <PageHeader
        title={EditEmployeePageText.PageHeaderText}
        subtitle={EditEmployeePageText.PageSubHeaderText}
        isButton={false}
      />
      <Box sx={{ mt: 1 }}>
        <FormEmployee<Employee>
          employee={employee}
          onEmployeeInfoChange={onEmployeeInfoChange}
        />
        <FormEmployeeAddress
          address={address}
          onAddressChange={onAddressChange}
        />
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
      </Box>
      <Button
        sx={{ ml: 1, mt: 1 }}
        disabled={!isFormChanged}
        onClick={saveChanges}
      >
        {EditEmployeePageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};

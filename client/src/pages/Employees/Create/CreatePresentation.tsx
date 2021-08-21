import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EmployeeCreatePageText } from '../../../text';
import { Employee, EmployeePageCreate } from '../../../types/types';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormCompany } from '../../../modules/components/FormCompany';
import { FormProjectsList } from '../../../modules/components/FormProjectsList';

export const CreatePresentation = (props: EmployeePageCreate) => {
  const {
    employee,
    employeeErrors,
    onEmployeeInfoChange,
    address,
    addressErrors,
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
  } = props;

  return (
    <Fragment>
      <PageHeader
        title={EmployeeCreatePageText.PageHeader}
        subtitle={EmployeeCreatePageText.PageSubHeader}
        isButton={false}
      />
      <FormEmployee<Omit<Employee, 'id'>>
        employee={employee}
        employeeErrors={employeeErrors}
        onEmployeeInfoChange={onEmployeeInfoChange}
      />
      <FormEmployeeAddress
        address={address}
        addressErrors={addressErrors}
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
      <Button
        sx={{ mb: 1, mr: 1 }}
        disabled={!isFormComplete}
        onClick={saveChanges}
      >
        {EmployeeCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

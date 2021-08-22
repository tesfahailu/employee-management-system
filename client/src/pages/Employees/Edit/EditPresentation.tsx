import { Box, Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { PageHeader } from '../../../modules/components/PageHeader';
import { EmployeeEditPageText } from '../../../text';
import { Employee, EmployeePageEdit } from '../../../types/types';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { FormCompany } from '../../../modules/components/FormCompany';
import { FormProjectsList } from '../../../modules/components/FormProjectsList';

export const EditPresentation = ({
  employee,
  employeeErrors,
  onEmployeeInfoChange,
  address,
  addressErrors,
  onAddressChange,
  statesList,
  countriesList,
  company,
  companyErrors,
  onCompanyChange,
  officesList,
  departmentsList,
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
        title={EmployeeEditPageText.PageHeader}
        subtitle={EmployeeEditPageText.PageSubHeader}
        isButton={false}
      />
      <Box sx={{ mt: 1 }}>
        <FormEmployee<Employee>
          employee={employee}
          employeeErrors={employeeErrors}
          onEmployeeInfoChange={onEmployeeInfoChange}
        />
        <FormEmployeeAddress
          address={address}
          addressErrors={addressErrors}
          onAddressChange={onAddressChange}
          statesList={statesList}
          countriesList={countriesList}
        />
        <FormCompany
          company={company}
          companyErrors={companyErrors}
          onCompanyChange={onCompanyChange}
          officesList={officesList}
          departmentsList={departmentsList}
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
        {EmployeeEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

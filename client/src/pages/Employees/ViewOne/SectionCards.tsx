import { Box } from '@material-ui/core';
import React from 'react';
import { EmployeeViewPageText } from '../../../text';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';
import { employeeData } from './services';
import { Address, Department, Project, Employee } from '../../../types/types';

export const SectionCards = () => {
  const {
    __typename: __typenameEmployee,
    id: employeeId,
    department,
    projects,
    employeeAddress,
    office,
    ...filteredEmployee
  } = employeeData.employee;

  const { __typename: __typeNameDepartment, ...spreadDepartment } = department!;

  const {
    __typename: __typeNameEmployeeAddress,
    id: employeeAddresssId,
    ...spreadEmployeeAddress
  } = employeeAddress!;

  const adjustedEmployeeAddress = {
    ...spreadEmployeeAddress,
    state: spreadEmployeeAddress.state.abbreviation,
    country: spreadEmployeeAddress!.country?.name,
  };

  const {
    __typename: __typeNameOfficeAddress,
    id: typeNameOfficeId,
    ...spreadOfficeAddress
  } = office!.address;

  const adjustedOfficeAddress = {
    ...spreadOfficeAddress,
    state: spreadEmployeeAddress.state.abbreviation,
    country: spreadEmployeeAddress.country.name,
  };

  const adjustedProjects = projects!.map((project) => {
    const {
      __typename: __typeNameProject,
      id: projectId,
      description,
      ...spreadProject
    } = project!;
    return spreadProject;
  });

  return (
    <Box sx={{ mt: 2 }}>
      <CardStyledDisplay
        headerText={EmployeeViewPageText.EmployeeInfo}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={filteredEmployee as Employee}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.Department}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={spreadDepartment as Department}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.EmployeeAddress}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={adjustedEmployeeAddress as Address}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.OfficeeAddress}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={adjustedOfficeAddress as Address}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.CurrentProjects}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={adjustedProjects as Array<Project>}
      />
    </Box>
  );
};

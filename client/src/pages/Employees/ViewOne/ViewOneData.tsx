import React from 'react';
import { employeeData } from './testData';
import { ViewOnePresentation } from './ViewOnePresentation';
import {
  AddressType,
  DepartmentType,
  ProjectType,
  EmployeeType,
} from '../../../types/types';

export const ViewOneData = ({}) => {
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
    <ViewOnePresentation
      employee={filteredEmployee as EmployeeType}
      department={spreadDepartment as DepartmentType}
      employeeAddress={adjustedEmployeeAddress as AddressType}
      officeAddress={adjustedOfficeAddress as AddressType}
      projects={adjustedProjects as Array<ProjectType>}
    />
  );
};

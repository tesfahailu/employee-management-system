import React from 'react';
import { employeeData } from './testData';
import { EmployeeViewPresentation } from './employeeViewPresentation';
import {
  AddressType,
  EmployeeDepartmentType,
  ProjectType,
  ViewEmployeeType,
} from '../../types/types';

export const EmployeeView: React.FC = ({}) => {
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
      ...spreadProject
    } = project!;
    return spreadProject;
  });

  return (
    <EmployeeViewPresentation
      employee={filteredEmployee as ViewEmployeeType}
      department={spreadDepartment as EmployeeDepartmentType}
      employeeAddress={adjustedEmployeeAddress as AddressType}
      officeAddress={adjustedOfficeAddress as AddressType}
      projects={adjustedProjects as Array<ProjectType>}
    />
  );
};

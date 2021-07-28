import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import {
  AddressFieldType,
  DepartmentFieldType,
  EmployeeFieldType,
  ProjectFieldType,
} from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

export const CreateData = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    type: '',
  });
  const [employeeAddress, setEmployeeAddress] = useState({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [department, setDepartment] = useState({
    title: '',
    description: '',
  });
  const [officeAddress, setOfficeAddress] = useState({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [projects, setProjects] = useState([
    { id: 0, name: '', description: '' },
  ]);

  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => console.log('save changes');

  const onEmployeeInfoChange =
    (field: EmployeeFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setEmployee((previousEmployee) => {
        return {
          ...previousEmployee,
          [field]: event.target!.value,
        };
      });
    };

  const onEmployeeAddressChange =
    (field: AddressFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setEmployeeAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target!.value,
        };
      });
    };

  const onDepartmentChange =
    (field: DepartmentFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setDepartment((previousDepartment) => {
        return {
          ...previousDepartment,
          [field]: event.target!.value,
        };
      });
    };

  const onOfficeAddressChange =
    (field: AddressFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setOfficeAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target!.value,
        };
      });
    };

  const onProjectChange =
    (id: number, field: ProjectFieldType) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setProjects((previousProjects) => {
        const foundProject = previousProjects.find(
          (project) => project.id === id,
        )!;
        foundProject[field] = event.target.value!;
        return [...previousProjects];
      });
    };
  return (
    <CreatePresentation
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
      employeeAddress={employeeAddress}
      onEmployeeAddressChange={onEmployeeAddressChange}
      department={department}
      onDepartmentChange={onDepartmentChange}
      officeAddress={officeAddress}
      onOfficeAddressChange={onOfficeAddressChange}
      projects={projects}
      onProjectChange={onProjectChange}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
    />
  );
};

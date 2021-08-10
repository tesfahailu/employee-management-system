import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import {
  Address,
  Department,
  Employee,
  OnChangeIndex,
  OnChangeSelect,
  Project,
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
    name: '',
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

  const onEmployeeInfoChange: OnChangeSelect<Employee> = (field) => (event) =>
    setEmployee((previousEmployee) => {
      return {
        ...previousEmployee,
        [field]: event.target!.value,
      };
    });

  const onEmployeeAddressChange: OnChangeSelect<Address> = (field) => (event) =>
    setEmployeeAddress((previousAddress) => {
      return {
        ...previousAddress,
        [field]: event.target!.value,
      };
    });

  const onDepartmentChange: OnChangeSelect<Department> = (field) => (event) =>
    setDepartment((previousDepartment) => {
      return {
        ...previousDepartment,
        [field]: event.target!.value,
      };
    });

  const onOfficeAddressChange: OnChangeSelect<Address> = (field) => (event) =>
    setOfficeAddress((previousAddress) => {
      return {
        ...previousAddress,
        [field]: event.target!.value,
      };
    });

  const onProjectChange: OnChangeIndex<Project> = (id, field) => (event) =>
    setProjects((previousProjects) => {
      const foundProject = previousProjects.find(
        (project) => project.id === id,
      )!;
      // foundProject[field] = event.target.value!;
      return [...previousProjects];
    });

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

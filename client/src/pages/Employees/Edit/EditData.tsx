import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import {
  AddressFieldType,
  DepartmentFieldType,
  EmployeeFieldType,
  OfficeFieldType,
  RoleFieldType,
} from '../../../types/types';
import { employeeData } from '../ViewOne/testData';
import { EditPresentation } from './EditPresentation';

const { id, firstName, lastName, mobile, email, type } = employeeData.employee!;
const {
  id: employeeId,
  streetAddress1: employeeStreetAddress1,
  streetAddress2: employeeStreetAddress2,
  city: employeeCity,
  state: employeeState,
  country: employeeCountry,
  zipCode: employeeZipCode,
} = employeeData.employee.employeeAddress!;

export const EditData = () => {
  const [employee, setEmployee] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    type: '',
  });
  const [employeeAddress, setEmployeeAddress] = useState({
    id: 0,
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [office, setOffice] = useState({
    id: 0,
    name: '',
  });
  const [department, setDepartment] = useState({
    id: 0,
    title: '',
    description: '',
  });
  const [role, setRole] = useState({ id: 0, name: '', description: '' });
  const [projects, setProjects] = useState([
    { id: 0, name: '', description: '' },
  ]);
  const [open, setOpen] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const officesList = [
    { id: 0, name: 'los angeles' },
    { id: 1, name: 'boston' },
    { id: 2, name: 'miama' },
  ];
  const departmentsList = [
    { id: 0, name: 'marketing', description: '' },
    { id: 1, name: 'operations', description: '' },
    { id: 2, name: 'finanace', description: '' },
    { id: 3, name: 'sales', description: '' },
    { id: 4, name: 'product', description: '' },
  ];
  const rolesList = [
    {
      id: 0,
      name: 'admin',
      description: 'can view, edit, and delete all resources',
    },
    {
      id: 1,
      name: 'basic',
      description: 'can view, edit, and delete own resources',
    },
  ];
  const projectsList = [
    { id: 0, name: 'Amazon', description: 'Integrate with AWS' },
    { id: 1, name: 'Microsoft', description: 'Integrate with Azure' },
    { id: 2, name: 'Google', description: 'Integrate with Firebase' },
  ];

  useEffect(() => {
    setEmployee({
      id: id!,
      firstName: firstName!,
      lastName: lastName!,
      mobile: mobile!,
      email: email!,
      type: type!,
    });
    setEmployeeAddress({
      id: employeeId,
      streetAddress1: employeeStreetAddress1,
      streetAddress2: employeeStreetAddress2,
      city: employeeCity,
      state: employeeState.abbreviation,
      country: employeeCountry.name,
      zipCode: employeeZipCode,
    });
    setOffice({
      id: 1,
      name: 'boston',
    });
    setDepartment({
      id: 3,
      title: 'sales',
      description: '',
    });
    setRole({
      id: 0,
      name: 'admin',
      description: 'can view, edit, and delete all resources',
    });
    setProjects([
      { id: 0, name: 'Amazon', description: 'Integrate with AWS' },
      { id: 0, name: 'Microsoft', description: 'Integrate with Azure' },
    ]);
  }, []);

  const onEmployeeInfoChange =
    (field: EmployeeFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setIsFormChanged(true);
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
      setIsFormChanged(true);
      setEmployeeAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target!.value,
        };
      });
    };

  const onOfficeChange =
    (field: OfficeFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setIsFormChanged(true);
      setOffice((previousAddress) => {
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
      setIsFormChanged(true);
      setDepartment((previousDepartment) => {
        return {
          ...previousDepartment,
          [field]: event.target!.value,
        };
      });
    };

  const onRoleChange =
    (field: RoleFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setIsFormChanged(true);
      setRole((previousRole) => {
        return {
          ...previousRole,
          [field]: event.target!.value,
        };
      });
    };

  const onProjectAdd =
    (id: number) => (event: MouseEvent<HTMLInputElement>) => {
      setIsFormChanged(true);
      setOpen(false);
      const projectToAdd = projectsList.find((project) => project.id === id)!;
      setProjects((previousProjects) => {
        return [...previousProjects, { ...projectToAdd }];
      });
    };

  const onProjectRemove =
    (id: number) => (event: MouseEvent<HTMLInputElement>) => {
      setIsFormChanged(true);
      setProjects((previousProjects) => {
        const index = previousProjects.findIndex(
          (project) => project.id === id,
        );
        const prevProjects = previousProjects.splice(0, index);
        const postProjects = previousProjects.splice(index + 1);
        return [...prevProjects, ...postProjects];
      });
    };

  const saveChanges = () => {
    setIsFormChanged(false);
  };

  return (
    <EditPresentation
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
      employeeAddress={employeeAddress}
      onEmployeeAddressChange={onEmployeeAddressChange}
      office={office}
      onOfficeChange={onOfficeChange}
      officesList={officesList}
      department={department}
      onDepartmentChange={onDepartmentChange}
      departmentsList={departmentsList}
      role={role}
      onRoleChange={onRoleChange}
      rolesList={rolesList}
      projects={projects}
      onProjectAdd={onProjectAdd}
      onProjectRemove={onProjectRemove}
      projectsList={projectsList}
      isFormChanged={isFormChanged}
      open={open}
      setOpen={setOpen}
      saveChanges={saveChanges}
    />
  );
};

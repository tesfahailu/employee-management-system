import React, { useState } from 'react';
import {
  Address,
  Department,
  Employee,
  OfficeLabel,
  OnChangeSelect,
  OnMouseClick,
  Project,
  Role,
} from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

const officesList = [
  { id: 0, name: 'los angeles', description: '' },
  { id: 1, name: 'boston', description: '' },
  { id: 2, name: 'miama', description: '' },
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

export const CreateData = () => {
  const [employee, setEmployee] = useState<Omit<Employee, 'id'>>({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    type: '',
  });
  const [employeeAddress, setEmployeeAddress] = useState<Omit<Address, 'id'>>({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [office, setOffice] = useState<OfficeLabel>({
    id: 0,
    name: '',
    description: '',
  });
  const [department, setDepartment] = useState<Department>({
    id: 0,
    name: '',
    description: '',
  });
  const [role, setRole] = useState({ id: 0, name: '', description: '' });
  const [projects, setProjects] = useState<Project[]>([]);
  const [open, setOpen] = useState(false);
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

  const onOfficeChange: OnChangeSelect<OfficeLabel> = (field) => (event) => {
    setOffice((previousAddress) => {
      return {
        ...previousAddress,
        [field]: event.target!.value,
      };
    });
  };

  const onDepartmentChange: OnChangeSelect<Department> = (field) => (event) =>
    setDepartment((previousDepartment) => {
      return {
        ...previousDepartment,
        [field]: event.target!.value,
      };
    });

  const onRoleChange: OnChangeSelect<Role> = (field) => (event) => {
    setRole((previousRole) => {
      return {
        ...previousRole,
        [field]: event.target!.value,
      };
    });
  };

  const onProjectAdd: OnMouseClick = (id) => (_) => {
    setOpen(false);
    const projectToAdd = projectsList.find((project) => project.id === id)!;
    setProjects((previousProjects) => {
      return [...previousProjects, { ...projectToAdd }];
    });
  };

  const onProjectRemove: OnMouseClick = (id) => (_) => {
    setProjects((previousProjects) => {
      const index = previousProjects.findIndex((project) => project.id === id);
      const prevProjects = previousProjects.splice(0, index);
      const postProjects = previousProjects.splice(index + 1);
      return [...prevProjects, ...postProjects];
    });
  };
  return (
    <CreatePresentation
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
      address={employeeAddress}
      onAddressChange={onEmployeeAddressChange}
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
      isFormComplete={isFormComplete}
      open={open}
      setOpen={setOpen}
      saveChanges={saveChanges}
    />
  );
};

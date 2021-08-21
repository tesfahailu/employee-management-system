import React, { useEffect, useState } from 'react';
import {
  Address,
  Department,
  Employee,
  OfficeLabel,
  OnChangeSelect,
  OnMouseClick,
  Role,
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

const initialEmployee = {
  id: 0,
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  type: '',
};

const initialAddress = {
  id: 0,
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const EditData = () => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [employeeErrors, setEmployeeErrors] = useState(initialEmployee);

  const [employeeAddress, setEmployeeAddress] = useState(initialAddress);
  const [employeeAddressErrors, setEmployeeAddressErrors] =
    useState(initialAddress);

  const [office, setOffice] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [department, setDepartment] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [role, setRole] = useState({ id: 0, name: '', description: '' });
  const [projects, setProjects] = useState([
    { id: 0, name: '', description: '' },
  ]);
  const [open, setOpen] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

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
      description: '',
    });
    setDepartment({
      id: 3,
      name: 'sales',
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

  const onEmployeeInfoChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setIsFormChanged(true);
    setEmployee((previousEmployee) => {
      return {
        ...previousEmployee,
        [name]: value,
      };
    });
  };

  const onEmployeeAddressChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setIsFormChanged(true);
    setEmployeeAddress((previousAddress) => {
      return {
        ...previousAddress,
        [name]: value,
      };
    });
  };

  const onOfficeChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setIsFormChanged(true);
    setOffice((previousAddress) => {
      return {
        ...previousAddress,
        [name]: value,
      };
    });
  };

  const onDepartmentChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setIsFormChanged(true);
    setDepartment((previousDepartment) => {
      return {
        ...previousDepartment,
        [name]: value,
      };
    });
  };

  const onRoleChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setIsFormChanged(true);
    setRole((previousRole) => {
      return {
        ...previousRole,
        [name]: value,
      };
    });
  };

  const onProjectAdd: OnMouseClick = (id) => (_) => {
    setIsFormChanged(true);
    setOpen(false);
    const projectToAdd = projectsList.find((project) => project.id === id)!;
    setProjects((previousProjects) => {
      return [...previousProjects, { ...projectToAdd }];
    });
  };

  const onProjectRemove: OnMouseClick = (id) => (_) => {
    setIsFormChanged(true);
    setProjects((previousProjects) => {
      const index = previousProjects.findIndex((project) => project.id === id);
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
      employeeErrors={employeeErrors}
      onEmployeeInfoChange={onEmployeeInfoChange}
      address={employeeAddress}
      addressErrors={employeeAddressErrors}
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
      isFormChanged={isFormChanged}
      open={open}
      setOpen={setOpen}
      saveChanges={saveChanges}
    />
  );
};

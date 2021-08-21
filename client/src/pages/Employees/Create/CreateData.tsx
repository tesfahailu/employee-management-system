import React, { useState } from 'react';
import {
  validEmail,
  validPhoneNumber,
} from '../../../modules/utils/errorCheck';
import { OnChangeSelect, OnMouseClick, Project } from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';
import { departmentsList, officesList, projectsList, rolesList } from './data';
import { EmployeeCreateErrorText as ErrorText } from '../../../text';
import { useEffect } from 'react';

const initialEmployee = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
};

const initialStreetAddress = {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

const initialSelection = {
  id: 0,
  name: '',
  description: '',
};

export const CreateData = () => {
  //#region employee info
  const [employee, setEmployee] = useState(initialEmployee);
  const [employeeErrors, setEmployeeErrors] = useState(initialEmployee);
  const onEmployeeInfoChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;

    let errorText = '';

    switch (name) {
      case 'firstName':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'lastName':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'mobile':
        errorText = validPhoneNumber(value) ? '' : ErrorText.PhoneNumberInvalid;
        break;
      case 'email':
        errorText = validEmail(value) ? '' : ErrorText.EmailInvalid;
        break;
    }

    setEmployee((employee) => {
      return {
        ...employee,
        [name]: value,
      };
    });
    setEmployeeErrors((errors) => ({
      ...errors,
      [name]: errorText,
    }));
  };
  //#endregion

  //#region address
  const [employeeAddress, setEmployeeAddress] = useState(initialStreetAddress);
  const [employeeAddressErrors, setEmployeeAddressErrors] =
    useState(initialStreetAddress);
  const onEmployeeAddressChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';

    switch (name) {
      case 'streetAddress1':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'streetAddress2':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'city':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'state':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'country':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'zipCode':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
    }

    console.log('on employee address change', value);
    setEmployeeAddress((address) => {
      return {
        ...address,
        [name]: value,
      };
    });
    setEmployeeAddressErrors((errors) => {
      return {
        ...errors,
        [name]: errorText,
      };
    });
  };
  //#endregion

  //#region company
  const [office, setOffice] = useState(initialSelection);
  const onOfficeChange: OnChangeSelect = (event) => {
    const { value } = event.target;
    setOffice((office) => {
      return {
        ...office,
        name: value,
      };
    });
  };
  const [department, setDepartment] = useState(initialSelection);
  const onDepartmentChange: OnChangeSelect = (event) => {
    const { value } = event.target;

    setDepartment((department) => {
      return {
        ...department,
        name: value,
      };
    });
  };
  const [role, setRole] = useState(initialSelection);
  const onRoleChange: OnChangeSelect = (event) => {
    const { value } = event.target;

    setRole((role) => {
      return {
        ...role,
        name: value,
      };
    });
  };
  //#endregion

  //#region projects
  const [projects, setProjects] = useState<Project[]>([]);
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
  //#endregion

  //#region save
  const [isFormComplete, setIsFormComplete] = useState(false);
  useEffect(() => {
    let isValid = true;
    console.log(employee, employeeErrors);
    (Object.keys(employeeErrors) as Array<keyof typeof employeeErrors>).map(
      (key) => {
        if (employeeErrors[key] !== '' || employee[key] === '') {
          isValid = false;
        }
      },
    );

    console.log(employeeAddress, employeeAddressErrors);
    (
      Object.keys(employeeAddressErrors) as Array<
        keyof typeof employeeAddressErrors
      >
    ).map((key) => {
      if (employeeAddressErrors[key] !== '' || employeeAddress[key] === '') {
        isValid = false;
      }
    });
    setIsFormComplete(isValid);
  }, [employee, employeeErrors, employeeAddress, employeeAddressErrors]);

  const [open, setOpen] = useState(false);
  const saveChanges = () => console.log('save changes');
  //#endregion

  return (
    <CreatePresentation
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
      isFormComplete={isFormComplete}
      open={open}
      setOpen={setOpen}
      saveChanges={saveChanges}
    />
  );
};

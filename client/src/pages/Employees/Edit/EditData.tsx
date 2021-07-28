import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  AddressFieldType,
  DepartmentFieldType,
  EmployeeFieldType,
  ProjectFieldType,
} from '../../../types/types';
import { employeeData } from '../ViewOne/testData';
import { EditPresentation } from './EditPresentation';

export const EditData = ({}) => {
  const [employee, setEmployee] = useState({
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
  const [department, setDepartment] = useState({
    title: '',
    description: '',
  });
  const [officeAddress, setOfficeAddress] = useState({
    id: 0,
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
  const [isFormChanged, setIsFormChanged] = useState(false);

  const { firstName, lastName, mobile, email, type } = employeeData.employee!;
  const {
    id: employeeId,
    streetAddress1: employeeStreetAddress1,
    streetAddress2: employeeStreetAddress2,
    city: employeeCity,
    state: employeeState,
    country: employeeCountry,
    zipCode: employeeZipCode,
  } = employeeData.employee.employeeAddress!;
  const { title: departmentTitle, description: departmentDescription } =
    employeeData.employee.department!;
  const {
    id: officeId,
    streetAddress1: officeStreetAddress1,
    streetAddress2: officeStreetAddress2,
    city: officeCity,
    state: officeState,
    country: officeCountry,
    zipCode: officeZipCode,
  } = employeeData.employee.office!.address;
  const remoteProjectData = employeeData.employee.projects!.map((project) => ({
    id: project?.id!,
    name: project?.name!,
    description: project?.description!,
  }));

  useEffect(() => {
    setEmployee({
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
    setOfficeAddress({
      id: officeId,
      streetAddress1: officeStreetAddress1,
      streetAddress2: officeStreetAddress2,
      city: officeCity,
      state: officeState.abbreviation,
      country: officeCountry.name,
      zipCode: officeZipCode,
    });
    setDepartment({
      title: departmentTitle,
      description: departmentDescription,
    });
    setProjects(remoteProjectData);
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

  const onEmployeeAddressChange = (field: AddressFieldType) => {
    return (
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
  };

  const onDepartmentChange = (field: DepartmentFieldType) => {
    return (
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
  };

  const onOfficeAddressChange = (field: AddressFieldType) => {
    return (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setIsFormChanged(true);
      setOfficeAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target!.value,
        };
      });
    };
  };

  const onProjectChange = (id: number, field: ProjectFieldType) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setIsFormChanged(true);
      setProjects((previousProjects) => {
        const foundProject = previousProjects.find(
          (project) => project.id === id,
        )!;
        foundProject[field] = event.target.value!;
        return [...previousProjects];
      });
    };
  };

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormChanged(false);
  };
  return (
    <EditPresentation
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
      isFormChanged={isFormChanged}
      saveChanges={saveChanges}
    />
  );
};

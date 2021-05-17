import React, { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { ViewEmployeeType, EmployeeFieldType } from '../../types/types';
import { employeeData } from '../EmployeeView/testData';
import { EmployeeInfoPresentation } from './EmployeeInfoPresentation';

export const EmployeeInfoData: React.FC = ({}) => {
  const [employee, setEmployee] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  const { firstName, lastName, mobile, email, type } = employeeData.employee;

  useEffect(
    () =>
      setEmployee({
        firstName,
        lastName,
        mobile,
        email,
        type,
      }),
    [],
  );

  const onEmployeeInfoChange = (field: EmployeeFieldType) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setIsFormChanged(true);
      setEmployee((previousEmployee) => {
        return {
          ...previousEmployee,
          [field]: event.target.value,
        };
      });
    };
  };

  const saveDescription = () => {
    console.log('Saved description');
    setIsFormChanged(false);
  };

  return (
    <EmployeeInfoPresentation
      employee={employee as ViewEmployeeType}
      onEmployeeInfoChange={onEmployeeInfoChange}
      isFormChanged={isFormChanged}
      saveDescription={saveDescription}
    />
  );
};

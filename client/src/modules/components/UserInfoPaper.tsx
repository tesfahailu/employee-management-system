import React, { useState } from 'react';
import { Employee, OnChangeSelect } from '../../types/types';
import { FormEmployee } from './FormEmployee';

export const UserInfoPaper = () => {
  const [employee, setEmployee] = useState({
    id: 10,
    firstName: 'Tesfa',
    lastName: 'Hailu',
    email: 'th@gmail.com',
    mobile: '6666666666',
    type: null,
  });

  const onEmployeeInfoChange: OnChangeSelect<Employee> = (field) => (event) => {
    setEmployee((previousEmployee) => {
      return {
        ...previousEmployee,
        [field]: event.target!.value,
      };
    });
  };

  return (
    <FormEmployee<Employee>
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
    />
  );
};

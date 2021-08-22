import React, { useState } from 'react';
import { Employee, OnChangeSelect } from '../../types/types';
import { FormEmployee } from './FormEmployee';

const initialEmployee = {
  id: 10,
  firstName: 'Tesfa',
  lastName: 'Hailu',
  email: 'th@gmail.com',
  mobile: '6666666666',
};

export const UserInfoPaper = () => {
  const [employee, setEmployee] = useState(initialEmployee);

  const [errors, setErrors] = useState(initialEmployee);

  const onEmployeeInfoChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setEmployee((previousEmployee) => {
      return {
        ...previousEmployee,
        [name]: value,
      };
    });
  };

  return (
    <FormEmployee<Employee>
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
      employeeErrors={errors}
    />
  );
};

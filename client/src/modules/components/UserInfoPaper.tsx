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

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setEmployee((previousEmployee) => {
      return {
        ...previousEmployee,
        [name]: value,
      };
    });
  };

  const onErrorChange: OnChangeSelect = (event) => {
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
      onChange={onChange}
      onErrorChange={onErrorChange}
      employeeErrors={errors}
    />
  );
};

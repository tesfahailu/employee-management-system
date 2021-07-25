import React, { ChangeEvent, useState } from 'react';
import { EmployeeFieldType } from '../../../types/types';
import { EmployeeInfoCard } from '../../Employees/components/EmployeeInfoCard';

export const UserInfoPaper = () => {
  const [employee, setEmployee] = useState({
    firstName: 'Tesfa',
    lastName: 'Hailu',
    email: 'th@gmail.com',
    mobile: '6666666666',
  });

  const onEmployeeInfoChange = (field: EmployeeFieldType) => {
    return (
      event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
    ) => {
      setEmployee((previousEmployee) => {
        return {
          ...previousEmployee,
          [field]: event.target.value,
        };
      });
    };
  };

  return (
    <EmployeeInfoCard
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
    />
  );
};

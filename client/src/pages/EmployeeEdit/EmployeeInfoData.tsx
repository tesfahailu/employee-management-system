import React, { useEffect, useState } from 'react';
import { ViewEmployeeType } from '../../types/types';
import { employeeData } from '../EmployeeView/testData';
import { EmployeeInfoPresentation } from './EmployeeInfoPresentation';

export const EmployeeInfoData: React.FC = ({}) => {
  const [employee, setEmployee] = useState({});

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

  return (
    <EmployeeInfoPresentation
      employee={employee as ViewEmployeeType}
      setEmployee={setEmployee}
    />
  );
};

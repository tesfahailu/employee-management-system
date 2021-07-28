import { SelectChangeEvent } from '@material-ui/core/Select';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { EmployeeFieldType } from '../../../types/types';
import { EmployeeInfoCard } from '../../Employees/components/EmployeeInfoCard';

export const UserInfoPaper = () => {
  const [employee, setEmployee] = useState({
    firstName: 'Tesfa',
    lastName: 'Hailu',
    email: 'th@gmail.com',
    mobile: '6666666666',
  });

  //React.ChangeEvent<HTMLInputElement> or SelectChangeEvent
  const onEmployeeInfoChange =
    (field: EmployeeFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setEmployee((previousEmployee) => {
        return {
          ...previousEmployee,
          [field]: event.target!.value,
        };
      });
    };

  return (
    <EmployeeInfoCard
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
    />
  );
};

import { SelectChangeEvent } from '@material-ui/core/Select';
import React, { ChangeEvent, useState } from 'react';
import { EmployeeFieldType } from '../../types/types';
import { FormEmployee } from './FormEmployee';

export const UserInfoPaper = () => {
  const [employee, setEmployee] = useState({
    firstName: 'Tesfa',
    lastName: 'Hailu',
    email: 'th@gmail.com',
    mobile: '6666666666',
  });

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
    <FormEmployee
      employee={employee}
      onEmployeeInfoChange={onEmployeeInfoChange}
    />
  );
};

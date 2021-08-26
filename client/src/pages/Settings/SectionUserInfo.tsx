import React, { useState } from 'react';
import { Employee, OnChangeSelect } from '../../types/types';
import { FormEmployee } from '../../modules/components/FormEmployee';
import { Box } from '@material-ui/system';

const initialEmployee = {
  id: 10,
  firstName: 'Tesfa',
  lastName: 'Hailu',
  email: 'th@gmail.com',
  mobile: '6666666666',
};

export const SectionUserInfo = () => {
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
    <Box sx={{ mt: 2 }}>
      <FormEmployee<Employee>
        employee={employee}
        onChange={onChange}
        onErrorChange={onErrorChange}
        errors={errors}
      />
    </Box>
  );
};

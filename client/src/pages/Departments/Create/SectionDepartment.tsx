import React, { useState } from 'react';
import { OnChangeSelect } from '../../../types/types';
import { FormDepartment } from '../../../modules/components/FormDepartment';

export const SectionDepartment = () => {
  const [department, setDepartment] = useState({
    name: '',
    description: '',
  });

  const onDepartmentChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setDepartment((previousDepartment) => {
      return {
        ...previousDepartment,
        [name]: value,
      };
    });
  };
  return (
    <FormDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
  );
};

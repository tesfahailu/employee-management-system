import React, { useEffect, useState } from 'react';
import { OnChangeSelect } from '../../../types/types';
import { FormDepartment } from '../../../modules/components/FormDepartment';

export const EditPresentation = () => {
  const [department, setDepartment] = useState({
    id: 0,
    name: '',
    description: '',
  });

  useEffect(() => {
    setDepartment({
      id: 1,
      name: 'sales',
      description: 'money mayweather',
    });
  }, []);

  const onDepartmentChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    // setIsFormChanged(true);
    setDepartment((previousDepartment) => {
      return { ...previousDepartment, [name]: value };
    });
  };
  return (
    <FormDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
  );
};

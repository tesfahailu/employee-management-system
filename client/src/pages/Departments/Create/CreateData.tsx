import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { Department, OnChangeSelect } from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

export const CreateData = () => {
  const [department, setDepartment] = useState({
    name: '',
    description: '',
  });

  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => console.log('save changes');

  const onDepartmentChange: OnChangeSelect<Department> = (field) => (event) => {
    setDepartment((previousDepartment) => {
      return {
        ...previousDepartment,
        [field]: event.target!.value,
      };
    });
  };

  return (
    <CreatePresentation
      department={department}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
      onDepartmentChange={onDepartmentChange}
    />
  );
};

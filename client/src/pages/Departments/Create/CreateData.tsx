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
    <CreatePresentation
      department={department}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
      onDepartmentChange={onDepartmentChange}
    />
  );
};

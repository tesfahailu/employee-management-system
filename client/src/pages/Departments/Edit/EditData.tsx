import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Department, OnChangeSelect } from '../../../types/types';
import { EditPresentation } from './EditPresentation';

export const EditData = () => {
  const [department, setDepartment] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    setDepartment({
      id: 1,
      name: 'sales',
      description: 'money mayweather',
    });
  }, []);

  const onDepartmentChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setIsFormChanged(true);
    setDepartment((previousDepartment) => {
      return { ...previousDepartment, [name]: value };
    });
  };

  const saveChanges = () => console.log('Changes saved');
  return (
    <EditPresentation
      department={department}
      onDepartmentChange={onDepartmentChange}
      isFormChanged={isFormChanged}
      saveChanges={saveChanges}
    />
  );
};

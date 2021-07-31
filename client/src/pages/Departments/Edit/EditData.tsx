import React, { ChangeEvent, useEffect, useState } from 'react';
import { DepartmentFieldType } from '../../../types/types';
import { EditPresentation } from './EditPresentation';

export const EditData = () => {
  const [department, setDepartment] = useState({
    id: 0,
    title: '',
    description: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    setDepartment({
      id: 1,
      title: 'sales',
      description: 'money mayweather',
    });
  }, []);

  const onDepartmentChange = (field: DepartmentFieldType) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setIsFormChanged(true);
      setDepartment((previousDepartment) => {
        return { ...previousDepartment, [field]: event.target.value };
      });
    };
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

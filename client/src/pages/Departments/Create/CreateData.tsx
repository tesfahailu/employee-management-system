import React, { ChangeEvent, useState } from 'react';
import { DepartmentFieldType } from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

export const CreateData = ({}) => {
  const [department, setDepartment] = useState({
    title: '',
    description: '',
  });

  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => console.log('save changes');

  const onDepartmentChange = (field: DepartmentFieldType) => {
    return (
      event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
    ) => {
      setDepartment((previousDepartment) => {
        return {
          ...previousDepartment,
          [field]: event.target.value,
        };
      });
    };
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

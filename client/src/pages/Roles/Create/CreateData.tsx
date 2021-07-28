import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { RoleFieldType } from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

export const CreateData = () => {
  const [role, setRole] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const onRoleChange =
    (field: RoleFieldType) =>
    (
      event:
        | SelectChangeEvent
        | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRole((previousRole) => {
        return { ...previousRole, [field]: event.target.value };
      });
    };

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };
  return (
    <CreatePresentation
      role={role}
      onRoleChange={onRoleChange}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
    />
  );
};
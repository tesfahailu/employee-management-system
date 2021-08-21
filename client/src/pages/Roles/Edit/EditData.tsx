import React, { ChangeEvent, useEffect, useState } from 'react';
import { OnChangeField, Role } from '../../../types/types';
import { EditPresentation } from './EditPresentation';

export const EditData = () => {
  const [role, setRole] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  const dataRole = { id: 1, name: 'limited', description: 'temporary access' };
  useEffect(() => {
    setRole(dataRole);
  }, []);

  const onRoleChange: OnChangeField = (event) => {
    const { name, value } = event.target;
    setRole((previousRole) => {
      return { ...previousRole, [name]: value };
    });
  };

  const saveChanges = () => {
    setIsFormChanged(false);
  };
  return (
    <EditPresentation
      role={role}
      onRoleChange={onRoleChange}
      isFormChanged={isFormChanged}
      saveChanges={saveChanges}
    />
  );
};

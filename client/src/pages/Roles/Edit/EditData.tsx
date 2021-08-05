import React, { ChangeEvent, useEffect, useState } from 'react';
import { RoleFieldType } from '../../../types/types';
import { EditPresentation } from './EditPresentation';

export const EditData = () => {
  const [role, setRole] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const dataRole = { id: 1, name: 'limited', description: 'temporary access' };
  useEffect(() => {
    setRole(dataRole);
  }, []);

  const onRoleChange =
    (field: RoleFieldType) =>
    (event: ChangeEvent<{ name?: string; value: unknown }>) => {
      setRole((previousRole) => {
        return { ...previousRole, [field]: event.target.value };
      });
    };

  const saveChanges = () => {
    setIsFormComplete(false);
  };
  return (
    <EditPresentation
      role={role}
      onRoleChange={onRoleChange}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
    />
  );
};

import React, { useState } from 'react';
import { OnChangeSelect } from '../../../types/types';
import { FormRole } from '../../../modules/components/FormRole';

export const SectionRole = () => {
  const [role, setRole] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const onRoleChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setRole((previousRole) => {
      return { ...previousRole, [name]: value };
    });
  };

  return <FormRole role={role} onRoleChange={onRoleChange} />;
};

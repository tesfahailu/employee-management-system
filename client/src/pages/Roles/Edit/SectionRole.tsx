import React, { useEffect, useState } from 'react';
import { OnChangeField } from '../../../types/types';
import { FormRole } from '../../../modules/components/FormRole';
import { dataRole } from './services';

export const SectionRole = () => {
  const [role, setRole] = useState({
    id: 0,
    name: '',
    description: '',
  });

  useEffect(() => {
    setRole(dataRole);
  }, []);

  const onRoleChange: OnChangeField = (event) => {
    const { name, value } = event.target;
    setRole((previousRole) => {
      return { ...previousRole, [name]: value };
    });
  };

  return <FormRole role={role} onRoleChange={onRoleChange} />;
};

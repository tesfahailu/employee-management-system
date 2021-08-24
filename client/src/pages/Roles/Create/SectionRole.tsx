import React, { useEffect, useState } from 'react';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { FormRole } from '../../../modules/components/FormRole';
import { GeneralErrorText as ErrorText } from '../../../text';

const initialRole = {
  id: 0,
  name: '',
  description: '',
};

export const SectionRole = ({ setIsFormComplete }: SectionProp) => {
  const [role, setRole] = useState(initialRole);
  const [errors, setErrors] = useState(initialRole);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setRole((role) => {
      return { ...role, [name]: value };
    });
  };

  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';

    switch (name) {
      case 'name':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
    }

    setErrors((error) => {
      return {
        ...error,
        [name]: errorText,
      };
    });
  };

  useEffect(() => {
    let isValid = true;

    if (role.name === '' || errors.name) {
      isValid = false;
    } else if (errors.name) {
      isValid = false;
    }

    setIsFormComplete!(isValid);
  }, [errors]);

  return (
    <FormRole
      role={role}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
    />
  );
};

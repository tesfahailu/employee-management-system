import React, { useEffect, useState } from 'react';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { FormDepartment } from '../../../modules/components/FormDepartment';
import { GeneralErrorText as ErrorText } from '../../../text';

const initialDepartment = {
  name: '',
  description: '',
};

export const SectionDepartment = ({ setIsFormComplete }: SectionProp) => {
  const [department, setDepartment] = useState(initialDepartment);
  const [errors, setErrors] = useState(initialDepartment);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setDepartment((previousDepartment) => {
      return {
        ...previousDepartment,
        [name]: value,
      };
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

    if (department.name === '' || errors.name) {
      isValid = false;
    } else if (errors.name) {
      isValid = false;
    }

    setIsFormComplete!(isValid);
  }, [errors]);

  return (
    <FormDepartment
      department={department}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
    />
  );
};

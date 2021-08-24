import React, { useEffect, useState } from 'react';
import {
  validPhoneNumber,
  validEmail,
} from '../../../modules/utils/errorCheck';
import { Employee, OnChangeSelect, SectionProp } from '../../../types/types';
import {
  EmployeeErrorText as ErrorText,
  GeneralErrorText,
} from '../../../text';
import { FormEmployee } from '../../../modules/components/FormEmployee';

const initialEmployee = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
};

export const SectionEmployee = ({ setIsError }: SectionProp) => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [errors, setErrors] = useState(initialEmployee);
  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setEmployee((employee) => {
      return {
        ...employee,
        [name]: value,
      };
    });
  };
  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';
    switch (name) {
      case 'firstName':
        errorText = value === '' ? GeneralErrorText.FieldEmpty : '';
        break;
      case 'lastName':
        errorText = value === '' ? GeneralErrorText.FieldEmpty : '';
        break;
      case 'mobile':
        errorText = validPhoneNumber(value) ? '' : ErrorText.PhoneNumberInvalid;
        break;
      case 'email':
        errorText = validEmail(value) ? '' : ErrorText.EmailInvalid;
        break;
    }
    setErrors((errors) => ({
      ...errors,
      [name]: errorText,
    }));
  };

  useEffect(() => {
    let isValid = true;
    (Object.keys(errors) as Array<keyof typeof errors>).map((key) => {
      if (errors[key] !== '' || employee[key] === '') {
        isValid = false;
      }
    });

    setIsError((error) => ({ ...error, employee: !isValid }));
  }, [errors]);

  return (
    <FormEmployee<Omit<Employee, 'id'>>
      employee={employee}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
    />
  );
};

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
import { employeeData } from '../ViewOne/services';

const { id, firstName, lastName, mobile, email, type } = employeeData.employee!;

const initialEmployee = {
  id: -1,
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  type: '',
};

export const SectionEmployee = ({
  setIsErrors,
  setIsFormChanged,
}: SectionProp) => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [errors, setEmployeeErrors] = useState(initialEmployee);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setEmployee((employee) => {
      return {
        ...employee,
        [name]: value,
      };
    });
    setIsFormChanged!(true);
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

    setEmployeeErrors((errors) => ({
      ...errors,
      [name]: errorText,
    }));
    setIsErrors!((isError) => ({
      ...isError,
      employee: errorText ? true : false,
    }));
  };

  useEffect(() => {
    let isValid = true;
    (Object.keys(errors) as Array<keyof typeof errors>).map((key) => {
      if (errors[key] !== '' || employee[key] === '') {
        isValid = false;
      }
    });
  }, [errors]);

  useEffect(() => {
    setEmployee({
      id: id!,
      firstName: firstName!,
      lastName: lastName!,
      mobile: mobile!,
      email: email!,
      type: type!,
    });
  }, []);

  return (
    <FormEmployee<Omit<Employee, 'id'>>
      employee={employee}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
    />
  );
};

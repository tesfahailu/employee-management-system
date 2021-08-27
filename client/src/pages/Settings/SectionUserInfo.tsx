import React, { useEffect, useState } from 'react';
import { Employee, OnChangeSelect } from '../../types/types';
import { FormEmployee } from '../../modules/components/FormEmployee';
import { validPhoneNumber, validEmail } from '../../modules/utils/errorCheck';
import { EmployeeErrorText as ErrorText, GeneralErrorText } from '../../text';
import { TrainRounded } from '@material-ui/icons';

const employeeData = {
  id: 10,
  firstName: 'Tesfa',
  lastName: 'Hailu',
  email: 'th@gmail.com',
  mobile: '6666666666',
};

const initialEmployee = {
  id: -1,
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
};

export const SectionUserInfo = () => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [errors, setErrors] = useState(initialEmployee);
  const [isChanged, setIsChanged] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setEmployee((employee) => {
      return {
        ...employee,
        [name]: value,
      };
    });
    setIsChanged(true);
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

  const onSave = () => {
    console.log('Saving updated employee');
  };

  useEffect(() => {
    Object.keys(errors).forEach((key) => {
      if (key === 'id') return;
      if ((errors as any)[key]) {
        setIsValid(false);
      }
    });
  }, [errors]);

  useEffect(() => {
    setEmployee(employeeData);
  }, []);

  return (
    <FormEmployee<Employee>
      employee={employee}
      onChange={onChange}
      onErrorChange={onErrorChange}
      errors={errors}
      showButton={true}
      isChanged={isChanged}
      isValid={isValid}
      onSave={onSave}
    />
  );
};

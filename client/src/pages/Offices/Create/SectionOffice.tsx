import React, { useState, useEffect } from 'react';
import { FormOffice } from '../../../modules/components/FormOffice';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { statesList, countriesList } from '../../Employees/Edit/services';
import { GeneralErrorText as ErrorText } from '../../../text';

const intialOffice = {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const SectionOffice = ({ setIsFormComplete }: SectionProp) => {
  const [address, setAddress] = useState(intialOffice);
  const [errors, setErrors] = useState(intialOffice);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setAddress((address) => {
      return {
        ...address,
        [name]: value,
      };
    });
  };

  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;

    let errorText = '';

    switch (name) {
      case 'streetAddress1':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'streetAddress2':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'city':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'state':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'country':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'zipCode':
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
    (Object.keys(errors) as Array<keyof typeof errors>).map((key) => {
      if (errors[key] !== '' || address[key] === '') {
        isValid = false;
      }
    });
    setIsFormComplete!(isValid);
  }, [errors]);

  return (
    <FormOffice
      address={address}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
      statesList={statesList}
      countriesList={countriesList}
    />
  );
};

import React, { useEffect, useState } from 'react';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { FormOffice } from '../../../modules/components/FormOffice';
import { statesList, countriesList } from '../../Employees/Edit/services';
import { GeneralErrorText as ErrorText } from '../../../text';

const initialAddress = {
  id: 0,
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const SectionOffice = ({
  setIsFormChanged,
  setIsFormComplete,
}: SectionProp) => {
  const [address, setAddress] = useState(initialAddress);
  const [errors, setErrors] = useState(initialAddress);

  const onAddressChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setAddress((address) => {
      return {
        ...address,
        [name]: value,
      };
    });
    setIsFormChanged!(true);
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
      if (!errors[key] || address[key] === '') {
        isValid = false;
      }
    });
    setIsFormComplete!(isValid);
  }, [errors]);

  useEffect(() => {
    setAddress({
      id: 1,
      streetAddress1: '134 Camelot St.',
      streetAddress2: 'Apt. 4',
      city: 'Camps',
      state: 'New York',
      country: 'United States of America',
      zipCode: '98765',
    });
  }, []);

  return (
    <FormOffice
      address={address}
      errors={errors}
      onChange={onAddressChange}
      onErrorChange={onErrorChange}
      statesList={statesList}
      countriesList={countriesList}
    />
  );
};

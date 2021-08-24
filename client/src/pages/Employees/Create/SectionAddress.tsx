import React, { useState } from 'react';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { statesList, countriesList } from './services';
import { GeneralErrorText as ErrorText } from '../../../text';
import { useEffect } from 'react';

const initialAddress = {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const SectionAddress = ({ setIsErrors }: SectionProp) => {
  const [address, setAddress] = useState(initialAddress);
  const [errors, setErrors] = useState(initialAddress);
  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    const state = statesList.find((state) => state.name === address.state);
    const country = countriesList.find(
      (country) => country.name === address.country,
    );
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

    setErrors((errors) => {
      return {
        ...errors,
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
    setIsErrors!((error) => ({ ...error, address: !isValid }));
  }, [errors]);

  return (
    <FormEmployeeAddress
      address={address}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
      statesList={statesList}
      countriesList={countriesList}
    />
  );
};

import React, { useState } from 'react';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { statesList, countriesList } from './services';
import { EmployeeCreateErrorText as ErrorText } from '../../../text';
import { useEffect } from 'react';

const initialAddress = {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const SectionAddress = ({ setIsError }: SectionProp) => {
  const [address, setAddress] = useState(initialAddress);
  const [addressErrors, setAddressErrors] = useState(initialAddress);
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

    setAddressErrors((errors) => {
      return {
        ...errors,
        [name]: errorText,
      };
    });
  };

  useEffect(() => {
    let isValid = true;
    (Object.keys(addressErrors) as Array<keyof typeof addressErrors>).map(
      (key) => {
        if (addressErrors[key] !== '' || address[key] === '') {
          isValid = false;
        }
      },
    );
    setIsError((error) => ({ ...error, address: !isValid }));
  }, [addressErrors]);

  return (
    <FormEmployeeAddress
      address={address}
      addressErrors={addressErrors}
      onChange={onChange}
      onErrorChange={onErrorChange}
      statesList={statesList}
      countriesList={countriesList}
    />
  );
};

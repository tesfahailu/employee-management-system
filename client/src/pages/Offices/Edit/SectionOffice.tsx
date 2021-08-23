import React, { useEffect, useState } from 'react';
import { OnChangeSelect } from '../../../types/types';
import { FormOffice } from '../../../modules/components/FormOffice';
import { statesList, countriesList } from '../../Employees/Edit/services';

const initialAddress = {
  id: 0,
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

const countries = [{ value: 'USA', text: 'USA' }];
const states = [
  { value: 'MA', text: 'Massachusetts' },
  { value: 'NY', text: 'New York' },
];

export const SectionOffice = () => {
  const [address, setAddress] = useState(initialAddress);
  const [addressErrors, setAddressErrors] = useState(initialAddress);

  useEffect(() => {
    setAddress({
      id: 1,
      streetAddress1: '134 Camelot St.',
      streetAddress2: 'Apt. 4',
      city: 'Camps',
      state: 'Cooling',
      country: 'USA',
      zipCode: '98765',
    });
  }, []);

  const [isFormChanged, setIsFormChanged] = useState(false);
  const onAddressChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setAddress((address) => {
      return {
        ...address,
        [name]: value,
      };
    });
  };

  return (
    <FormOffice
      address={address}
      addressErrors={addressErrors}
      onChange={onAddressChange}
      onErrorChange={onAddressChange}
      statesList={statesList}
      countriesList={countriesList}
    />
  );
};

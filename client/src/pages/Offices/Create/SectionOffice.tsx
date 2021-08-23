import React, { useState } from 'react';
import { FormOffice } from '../../../modules/components/FormOffice';
import { OnChangeSelect } from '../../../types/types';
import { statesList, countriesList } from '../../Employees/Edit/services';

const intialOffice = {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const SectionOffice = () => {
  const [address, setAddress] = useState(intialOffice);
  const [addressErrors, setAddressErrors] = useState(intialOffice);

  const onAddressChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setAddress((previousAddress) => {
      return {
        ...previousAddress,
        [name]: value,
      };
    });
  };

  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setAddress((previousAddress) => {
      return {
        ...previousAddress,
        [name]: value,
      };
    });
  };

  return (
    <FormOffice
      address={address}
      addressErrors={addressErrors}
      onChange={onAddressChange}
      onErrorChange={onErrorChange}
      statesList={statesList}
      countriesList={countriesList}
    />
  );
};

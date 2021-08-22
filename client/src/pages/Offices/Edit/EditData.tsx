import React, { useEffect, useState } from 'react';
import { OnChangeSelect } from '../../../types/types';
import { countriesList, statesList } from '../../Employees/Create/data';
import { EditPresentation } from './EditPresentation';

const initialAddress = {
  id: 0,
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const EditData = () => {
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
    setAddress((previousAddress) => {
      return {
        ...previousAddress,
        [name]: value,
      };
    });
  };

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormChanged(false);
  };
  return (
    <EditPresentation
      address={address}
      addressErrors={addressErrors}
      statesList={statesList}
      countriesList={countriesList}
      isFormChanged={isFormChanged}
      onAddressChange={onAddressChange}
      saveChanges={saveChanges}
    />
  );
};

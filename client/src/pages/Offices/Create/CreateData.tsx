import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { Address, OnChangeSelect } from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

const intialOffice = {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const CreateData = ({}) => {
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

  const [isFormComplete, setIsFormComplete] = useState(false);

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };

  return (
    <CreatePresentation
      address={address}
      addressErrors={addressErrors}
      onAddressChange={onAddressChange}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
    />
  );
};

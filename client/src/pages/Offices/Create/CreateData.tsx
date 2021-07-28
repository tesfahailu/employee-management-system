import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { AddressFieldType } from '../../../types/types';
import { CreatePresentation } from './CreatePresentation';

export const CreateData = ({}) => {
  const [address, setAddress] = useState({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const onAddressChange =
    (field: AddressFieldType) =>
    (
      event: Partial<
        SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      >,
    ) => {
      setAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target!.value,
        };
      });
    };

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };

  return (
    <CreatePresentation
      address={address}
      onAddressChange={onAddressChange}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
    />
  );
};

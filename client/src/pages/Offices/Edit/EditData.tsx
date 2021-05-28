import React, { ChangeEvent, useEffect, useState } from 'react';
import { AddressFieldType } from '../../../types/types';
import { EditPresentation } from './EditPresentation';

export const EditData = () => {
  const [address, setAddress] = useState({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });

  useEffect(() => {
    setAddress({
      streetAddress1: '134 Camelot St.',
      streetAddress2: 'Apt. 4',
      city: 'Camps',
      state: 'Cooling',
      country: 'USA',
      zipCode: '98765',
    });
  }, []);

  const [isFormChanged, setIsFormChanged] = useState(false);

  const onAddressChange = (field: AddressFieldType) => {
    return (
      event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
    ) => {
      setAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target.value,
        };
      });
    };
  };

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormChanged(false);
  };
  return (
    <EditPresentation
      address={address}
      isFormChanged={isFormChanged}
      onAddressChange={onAddressChange}
      saveChanges={saveChanges}
    />
  );
};

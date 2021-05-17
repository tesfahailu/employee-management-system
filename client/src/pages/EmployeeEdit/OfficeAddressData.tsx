import React, { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { AddressFieldType } from '../../types/types';
import { employeeData } from '../EmployeeView/testData';
import { OfficeAddressPresentation } from './OfficeAddressPresentation';

export const OfficeAddressData: React.FC = ({}) => {
  const [address, setAddress] = useState({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  const {
    streetAddress1,
    streetAddress2,
    city,
    state,
    country,
    zipCode,
  } = employeeData.employee.office!.address;

  useEffect(
    () =>
      setAddress({
        streetAddress1,
        streetAddress2,
        city,
        state: state.abbreviation,
        country: country.name,
        zipCode,
      }),
    [],
  );

  const onAddressChange = (field: AddressFieldType) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setIsFormChanged(true);
      setAddress((previousAddress) => {
        return {
          ...previousAddress,
          [field]: event.target.value,
        };
      });
    };
  };

  const saveAddress = () => {
    console.log('Saved address');
    setIsFormChanged(false);
  };

  return (
    <OfficeAddressPresentation
      address={address}
      onAddressChange={onAddressChange}
      isFormChanged={isFormChanged}
      saveAddress={saveAddress}
    />
  );
};

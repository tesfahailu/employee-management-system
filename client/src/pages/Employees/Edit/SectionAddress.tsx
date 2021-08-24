import React, { useEffect, useState } from 'react';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { statesList, countriesList } from './services';
import { GeneralErrorText as ErrorText } from '../../../text';
import { employeeData } from '../ViewOne/services';

const initialAddress = {
  id: -1,
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

const {
  id: employeeId,
  streetAddress1: employeeStreetAddress1,
  streetAddress2: employeeStreetAddress2,
  city: employeeCity,
  state: employeeState,
  country: employeeCountry,
  zipCode: employeeZipCode,
} = employeeData.employee.employeeAddress!;

export const SectionAddress = ({
  setIsError,
  setIsFormChanged,
}: SectionProp) => {
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
    setIsFormChanged!(true);
  };

  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';

    console.log('address', name, value);

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
    setIsError((isError) => ({
      ...isError,
      address: errorText ? true : false,
    }));
  };

  useEffect(() => {
    setAddress({
      id: employeeId,
      streetAddress1: employeeStreetAddress1,
      streetAddress2: employeeStreetAddress2,
      city: employeeCity,
      state: employeeState.name,
      country: employeeCountry.name,
      zipCode: employeeZipCode,
    });
  }, []);

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

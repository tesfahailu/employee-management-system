import React, { useEffect, useState } from 'react';
import { FormCompany } from '../../../modules/components/FormCompany';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { officesList, departmentsList, rolesList } from './services';
import { GeneralErrorText as ErrorText } from '../../../text';

const initialCompany = {
  office: '',
  department: '',
  role: '',
};

export const SectionCompany = ({
  setIsError,
  setIsFormChanged,
}: SectionProp) => {
  const [company, setCompany] = useState(initialCompany);
  const [companyErrors, setCompanyErrors] = useState(initialCompany);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setCompany((company) => {
      return {
        ...company,
        [name]: value,
      };
    });
    setIsFormChanged!(true);
  };

  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';

    switch (name) {
      case 'office':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'department':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
      case 'role':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
    }

    setCompanyErrors((errors) => {
      return {
        ...errors,
        [name]: errorText,
      };
    });
    setIsError((isError) => ({
      ...isError,
      company: errorText ? true : false,
    }));
  };

  useEffect(() => {
    setCompany({
      office: 'boston',
      department: 'finance',
      role: 'admin',
    });
  }, []);

  return (
    <FormCompany
      company={company}
      errors={companyErrors}
      onCompanyChange={onChange}
      onErrorChange={onErrorChange}
      officesList={officesList}
      departmentsList={departmentsList}
      rolesList={rolesList}
    />
  );
};

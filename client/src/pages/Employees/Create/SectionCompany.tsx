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

export const SectionCompany = ({ setIsErrors }: SectionProp) => {
  const [company, setCompany] = useState(initialCompany);
  const [errors, setErrors] = useState(initialCompany);
  const onCompanyChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    const office = officesList.find((office) => office.name === company.office);
    const department = departmentsList.find(
      (department) => department.name === company.department,
    );
    const role = rolesList.find((role) => role.name === company.role);

    setCompany((company) => {
      return {
        ...company,
        [name]: value,
      };
    });
  };
  const onCompanyErrorChange: OnChangeSelect = (event) => {
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

    setErrors((errors) => {
      return {
        ...errors,
        [name]: errorText,
      };
    });
  };

  useEffect(() => {
    let isValid = true;
    (Object.keys(errors) as Array<keyof typeof errors>).map((key) => {
      if (errors[key] !== '' || company[key] === '') {
        isValid = false;
      }
    });
    setIsErrors!((error) => ({ ...error, company: !isValid }));
  }, [errors]);

  return (
    <FormCompany
      company={company}
      errors={errors}
      onCompanyChange={onCompanyChange}
      onErrorChange={onCompanyErrorChange}
      officesList={officesList}
      departmentsList={departmentsList}
      rolesList={rolesList}
    />
  );
};

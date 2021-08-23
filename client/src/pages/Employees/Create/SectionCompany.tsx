import React, { useEffect, useState } from 'react';
import { FormCompany } from '../../../modules/components/FormCompany';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { officesList, departmentsList, rolesList } from './services';
import { EmployeeCreateErrorText as ErrorText } from '../../../text';

const initialCompany = {
  office: '',
  department: '',
  role: '',
};

export const SectionCompany = ({ setIsError }: SectionProp) => {
  const [company, setCompany] = useState(initialCompany);
  const [companyErrors, setCompanyErrors] = useState(initialCompany);
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

    setCompanyErrors((errors) => {
      return {
        ...errors,
        [name]: errorText,
      };
    });
  };

  useEffect(() => {
    let isValid = true;
    (Object.keys(companyErrors) as Array<keyof typeof companyErrors>).map(
      (key) => {
        if (companyErrors[key] !== '' || company[key] === '') {
          isValid = false;
        }
      },
    );
    setIsError((error) => ({ ...error, company: !isValid }));
  }, [companyErrors]);

  return (
    <FormCompany
      company={company}
      companyErrors={companyErrors}
      onCompanyChange={onCompanyChange}
      onErrorChange={onCompanyErrorChange}
      officesList={officesList}
      departmentsList={departmentsList}
      rolesList={rolesList}
    />
  );
};

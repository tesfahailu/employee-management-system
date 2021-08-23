import React, { Fragment, useState, useEffect } from 'react';
import { EmployeeEditPageText } from '../../../text';
import { Button } from '@material-ui/core';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { SectionEmployee } from './SectionEmployee';
import { SectionAddress } from './SectionAddress';
import { SectionCompany } from './SectionCompany';
import { SectionProjects } from './SectionProjects';
import { useHistory } from 'react-router-dom';

export const Edit = () => {
  const history = useHistory();
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    history.push('/employees');
  };

  const [isError, setIsError] = useState({
    employee: true,
    address: true,
    company: true,
  });

  useEffect(() => {
    Object.keys(isError).map((key) => {
      let isValid = false;
      if (isError[key as keyof typeof isError]) {
        isValid = false;
      }
      setIsFormComplete(isValid);
    });
  }, [isError.employee, isError.address, isError.company]);

  return (
    <Fragment>
      <SectionHeader
        title={EmployeeEditPageText.PageHeader}
        subtitle={EmployeeEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionEmployee
        setIsError={setIsError}
        setIsFormChanged={setIsFormChanged}
      />
      <SectionAddress
        setIsError={setIsError}
        setIsFormChanged={setIsFormChanged}
      />
      <SectionCompany
        setIsError={setIsError}
        setIsFormChanged={setIsFormChanged}
      />
      <SectionProjects />
      <Button
        sx={{ ml: 1, mt: 1 }}
        disabled={!isFormChanged && !isFormComplete}
        onClick={saveChanges}
      >
        {EmployeeEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

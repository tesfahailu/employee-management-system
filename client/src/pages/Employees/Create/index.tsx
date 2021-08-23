import React, { Fragment, useState } from 'react';
import { EmployeeCreatePageText } from '../../../text';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { SectionEmployee } from './SectionEmployee';
import { SectionAddress } from './SectionAddress';
import { SectionCompany } from './SectionCompany';
import { SectionProjects } from './SectionProjects';
import { useEffect } from 'react';

export const Create = () => {
  const history = useHistory();
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
      let isValid = true;
      if (isError[key as keyof typeof isError]) {
        isValid = false;
      }
      setIsFormComplete(isValid);
    });
  }, [isError.employee, isError.address, isError.company]);

  return (
    <Fragment>
      <SectionHeader
        title={EmployeeCreatePageText.PageHeader}
        subtitle={EmployeeCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionEmployee setIsError={setIsError} />
      <SectionAddress setIsError={setIsError} />
      <SectionCompany setIsError={setIsError} />
      <SectionProjects />
      <Button sx={{ mt: 2 }} disabled={!isFormComplete} onClick={saveChanges}>
        {EmployeeCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

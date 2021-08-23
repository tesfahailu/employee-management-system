import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { OfficeCreatePageText } from '../../../text';
import { SectionOffice } from './SectionOffice';

export const Create = ({}) => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };

  return (
    <Fragment>
      <SectionHeader
        title={OfficeCreatePageText.PageHeader}
        subtitle={OfficeCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionOffice />
      <Button
        sx={{ mr: 1, mb: 1 }}
        disabled={!isFormComplete}
        onClick={saveChanges}
      >
        {OfficeCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

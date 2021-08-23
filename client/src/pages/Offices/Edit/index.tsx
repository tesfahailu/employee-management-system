import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { OfficeEditPageText } from '../../../text';
import { SectionOffice } from './SectionOffice';

export const Edit = () => {
  const [isFormChanged, setIsFormChanged] = useState(false);
  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormChanged(false);
  };
  return (
    <Fragment>
      <SectionHeader
        title={OfficeEditPageText.PageHeader}
        subtitle={OfficeEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionOffice />
      <Button
        sx={{ mr: 1, mb: 1 }}
        disabled={!isFormChanged}
        onClick={saveChanges}
      >
        {OfficeEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

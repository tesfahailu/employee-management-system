import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { RoleCreatePageText } from '../../../text';
import { SectionRole } from './SectionRole';

export const Create = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };
  return (
    <Fragment>
      <SectionHeader
        title={RoleCreatePageText.PageHeader}
        subtitle={RoleCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionRole />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {RoleCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { RoleEditPageText } from '../../../text';
import { SectionRole } from './SectionRole';

export const Edit = () => {
  const [isFormChanged, setIsFormChanged] = useState(false);
  const saveChanges = () => {
    setIsFormChanged(false);
  };
  return (
    <Fragment>
      <SectionHeader
        title={RoleEditPageText.PageHeader}
        subtitle={RoleEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionRole />
      <Button sx={{ mt: 1 }} disabled={!isFormChanged} onClick={saveChanges}>
        {RoleEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

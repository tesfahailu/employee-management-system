import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { DepartmentCreatePageText } from '../../../text';
import { SectionDepartment } from './SectionDepartment';

export const Create = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => console.log('save changes');
  return (
    <Fragment>
      <SectionHeader
        title={DepartmentCreatePageText.PageHeader}
        subtitle={DepartmentCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionDepartment />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {DepartmentCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

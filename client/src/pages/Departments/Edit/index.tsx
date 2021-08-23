import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { DepartmentEditPageText } from '../../../text';
import { SectionDepartment } from '../Create/SectionDepartment';

export const Edit = () => {
  const [isFormChanged, setIsFormChanged] = useState(false);
  const saveChanges = () => console.log('Changes saved');

  return (
    <Fragment>
      <SectionHeader
        title={DepartmentEditPageText.PageHeader}
        subtitle={DepartmentEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionDepartment />
      <Button sx={{ mt: 1 }} disabled={!isFormChanged} onClick={saveChanges}>
        {DepartmentEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

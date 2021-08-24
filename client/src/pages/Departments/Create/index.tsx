import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { DepartmentCreatePageText } from '../../../text';
import { SectionDepartment } from './SectionDepartment';

export const Create = () => {
  const history = useHistory();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    history.push('/departments');
  };

  return (
    <Fragment>
      <SectionHeader
        title={DepartmentCreatePageText.PageHeader}
        subtitle={DepartmentCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionDepartment setIsFormComplete={setIsFormComplete} />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {DepartmentCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

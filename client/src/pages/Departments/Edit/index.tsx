import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { DepartmentEditPageText } from '../../../text';
import { SectionDepartment } from './SectionDepartment';

export const Edit = () => {
  const history = useHistory();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const saveChanges = () => history.push('/departments');

  return (
    <Fragment>
      <SectionHeader
        title={DepartmentEditPageText.PageHeader}
        subtitle={DepartmentEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionDepartment
        setIsFormComplete={setIsFormComplete}
        setIsFormChanged={setIsFormChanged}
      />
      <Button
        sx={{ mt: 1 }}
        disabled={!isFormChanged || !isFormComplete}
        onClick={saveChanges}
      >
        {DepartmentEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

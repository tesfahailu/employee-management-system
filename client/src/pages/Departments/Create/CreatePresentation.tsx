import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { DepartmentCreatePageText } from '../../../text';
import { DepartmentPageCreate } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormDepartment } from '../../../modules/components/FormDepartment';

export const CreatePresentation = ({
  department,
  onDepartmentChange,
  isFormComplete,
  saveChanges,
}: DepartmentPageCreate) => (
  <Fragment>
    <PageHeader
      title={DepartmentCreatePageText.PageHeader}
      subtitle={DepartmentCreatePageText.PageSubHeader}
      isButton={false}
    />
    <FormDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {DepartmentCreatePageText.ButtonSave}
    </Button>
  </Fragment>
);

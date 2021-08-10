import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditDepartmentPageText } from '../../../text';
import { DepartmentPageEdit } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormDepartment } from '../../../modules/components/FormDepartment';

export const EditPresentation: React.FC<DepartmentPageEdit> = ({
  department,
  onDepartmentChange,
  isFormChanged,
  saveChanges,
}) => (
  <Fragment>
    <PageHeader
      title={EditDepartmentPageText.PageHeaderText}
      subtitle={EditDepartmentPageText.PageSubHeaderText}
      isButton={false}
    />
    <FormDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
    <Button sx={{ mt: 1 }} disabled={!isFormChanged} onClick={saveChanges}>
      {EditDepartmentPageText.SaveButtonText}
    </Button>
  </Fragment>
);

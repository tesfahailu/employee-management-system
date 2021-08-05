import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditDepartmentPageText } from '../../../text';
import { EditDepartmentType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardDepartment } from '../../../modules/components/CardDepartment';

export const EditPresentation: React.FC<EditDepartmentType> = ({
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
    <CardDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
    <Button sx={{ mt: 1 }} disabled={!isFormChanged} onClick={saveChanges}>
      {EditDepartmentPageText.SaveButtonText}
    </Button>
  </Fragment>
);

import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { CreateDepartmentPageText } from '../../../text';
import { CreateDepartmentType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardDepartment } from '../../../modules/components/CardDepartment';

export const CreatePresentation = ({
  department,
  onDepartmentChange,
  isFormComplete,
  saveChanges,
}: CreateDepartmentType) => (
  <Fragment>
    <PageHeader
      title={CreateDepartmentPageText.PageHeaderText}
      subtitle={CreateDepartmentPageText.PageSubHeaderText}
      isButton={false}
    />
    <CardDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {CreateDepartmentPageText.SaveButtonText}
    </Button>
  </Fragment>
);

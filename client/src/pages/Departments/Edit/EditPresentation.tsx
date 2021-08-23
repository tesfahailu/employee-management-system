import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { DepartmentEditPageText } from '../../../text';
import { DepartmentPageEdit } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { FormDepartment } from '../../../modules/components/FormDepartment';

export const EditPresentation: React.FC<DepartmentPageEdit> = ({
  department,
  onDepartmentChange,
  isFormChanged,
  saveChanges,
}) => (
  <Fragment>
    <SectionHeader
      title={DepartmentEditPageText.PageHeader}
      subtitle={DepartmentEditPageText.PageSubHeader}
      isButton={false}
    />
    <FormDepartment
      department={department}
      onDepartmentChange={onDepartmentChange}
    />
    <Button sx={{ mt: 1 }} disabled={!isFormChanged} onClick={saveChanges}>
      {DepartmentEditPageText.ButtonSave}
    </Button>
  </Fragment>
);

import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditRolePageText } from '../../../text';
import { CreateRoleType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormRole } from '../../../modules/components/FormRole';

export const EditPresentation = ({
  role,
  onRoleChange,
  isFormComplete,
  saveChanges,
}: CreateRoleType) => {
  return (
    <Fragment>
      <PageHeader
        title={EditRolePageText.PageHeaderText}
        subtitle={EditRolePageText.PageSubHeaderText}
        isButton={false}
      />
      <FormRole role={role} onRoleChange={onRoleChange} />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {EditRolePageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};

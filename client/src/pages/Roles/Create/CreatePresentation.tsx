import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateRolePageText } from '../../../text';
import { CreateRoleType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormRole } from '../../../modules/components/FormRole';

export const CreatePresentation = ({
  role,
  onRoleChange,
  isFormComplete,
  saveChanges,
}: CreateRoleType) => (
  <Fragment>
    <PageHeader
      title={CreateRolePageText.PageHeaderText}
      subtitle={CreateRolePageText.PageSubHeaderText}
      isButton={false}
    />
    <FormRole role={role} onRoleChange={onRoleChange} />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {CreateRolePageText.SaveButtonText}
    </Button>
  </Fragment>
);

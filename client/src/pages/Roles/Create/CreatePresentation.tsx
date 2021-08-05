import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateRolePageText } from '../../../text';
import { CreateRoleType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardRole } from '../../../modules/components/CardRole';

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
    <CardRole role={role} onRoleChange={onRoleChange} />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {CreateRolePageText.SaveButtonText}
    </Button>
  </Fragment>
);

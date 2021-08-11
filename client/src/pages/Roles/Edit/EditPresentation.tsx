import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { RoleEditPageText } from '../../../text';
import { RolePageEdit } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormRole } from '../../../modules/components/FormRole';

export const EditPresentation = ({
  role,
  onRoleChange,
  isFormChanged,
  saveChanges,
}: RolePageEdit) => (
  <Fragment>
    <PageHeader
      title={RoleEditPageText.PageHeader}
      subtitle={RoleEditPageText.PageSubHeader}
      isButton={false}
    />
    <FormRole role={role} onRoleChange={onRoleChange} />
    <Button sx={{ mt: 1 }} disabled={!isFormChanged} onClick={saveChanges}>
      {RoleEditPageText.ButtonSave}
    </Button>
  </Fragment>
);

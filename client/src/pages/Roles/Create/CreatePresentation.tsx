import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { RoleCreatePageText } from '../../../text';
import { RolePageCreate } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { FormRole } from '../../../modules/components/FormRole';

export const CreatePresentation = ({
  role,
  onRoleChange,
  isFormComplete,
  saveChanges,
}: RolePageCreate) => (
  <Fragment>
    <SectionHeader
      title={RoleCreatePageText.PageHeader}
      subtitle={RoleCreatePageText.PageSubHeader}
      isButton={false}
    />
    <FormRole role={role} onRoleChange={onRoleChange} />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {RoleCreatePageText.ButtonSave}
    </Button>
  </Fragment>
);

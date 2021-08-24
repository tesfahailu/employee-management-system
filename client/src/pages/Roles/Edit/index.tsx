import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { RoleEditPageText } from '../../../text';
import { SectionRole } from './SectionRole';

export const Edit = () => {
  const history = useHistory();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const saveChanges = () => history.push('/roles');

  return (
    <Fragment>
      <SectionHeader
        title={RoleEditPageText.PageHeader}
        subtitle={RoleEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionRole
        setIsFormComplete={setIsFormComplete}
        setIsFormChanged={setIsFormChanged}
      />
      <Button
        sx={{ mt: 1 }}
        disabled={!isFormChanged || !isFormComplete}
        onClick={saveChanges}
      >
        {RoleEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

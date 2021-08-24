import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { RoleCreatePageText } from '../../../text';
import { SectionRole } from './SectionRole';

export const Create = () => {
  const history = useHistory();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    history.push('/departments');
  };

  return (
    <Fragment>
      <SectionHeader
        title={RoleCreatePageText.PageHeader}
        subtitle={RoleCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionRole setIsFormComplete={setIsFormComplete} />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {RoleCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

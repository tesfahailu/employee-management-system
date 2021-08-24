import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { OfficeEditPageText } from '../../../text';
import { SectionOffice } from './SectionOffice';

export const Edit = () => {
  const history = useHistory();
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    history.push('/offices');
  };

  return (
    <Fragment>
      <SectionHeader
        title={OfficeEditPageText.PageHeader}
        subtitle={OfficeEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionOffice
        setIsFormChanged={setIsFormChanged}
        setIsFormComplete={setIsFormComplete}
      />
      <Button
        sx={{ mr: 1, mb: 1 }}
        disabled={!isFormChanged && !isFormComplete}
        onClick={saveChanges}
      >
        {OfficeEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

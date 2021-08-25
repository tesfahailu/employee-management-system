import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { ProjectEditPageText } from '../../../text';
import { SectionProject } from './SectionProject';

export const Edit = () => {
  const history = useHistory();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const saveChanges = () => history.push('/projects');

  return (
    <Fragment>
      <SectionHeader
        title={ProjectEditPageText.PageHeader}
        subtitle={ProjectEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionProject
        setIsFormComplete={setIsFormComplete}
        setIsFormChanged={setIsFormChanged}
      />
      <Button
        sx={{ mt: 2 }}
        disabled={!isFormChanged || !isFormComplete}
        onClick={saveChanges}
      >
        {ProjectEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

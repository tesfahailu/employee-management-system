import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { ProjectCreatePageText } from '../../../text';
import { SectionProject } from './SectionProject';

export const Create = () => {
  const history = useHistory();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    history.push('/projects');
  };

  return (
    <Fragment>
      <SectionHeader
        title={ProjectCreatePageText.PageHeader}
        subtitle={ProjectCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionProject setIsFormComplete={setIsFormComplete} />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {ProjectCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { ProjectCreatePageText } from '../../../text';
import { SectionProject } from './SectionProject';

export const Create = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };

  return (
    <Fragment>
      <SectionHeader
        title={ProjectCreatePageText.PageHeader}
        subtitle={ProjectCreatePageText.PageSubHeader}
        isButton={false}
      />
      <SectionProject />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {ProjectCreatePageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

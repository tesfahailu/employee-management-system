import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { ProjectEditPageText } from '../../../text';
import { SectionProject } from './SectionProject';

export const Edit = () => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const saveChanges = () => {
    setIsFormChanged(false);
  };

  return (
    <Fragment>
      <SectionHeader
        title={ProjectEditPageText.PageHeader}
        subtitle={ProjectEditPageText.PageSubHeader}
        isButton={false}
      />
      <SectionProject />
      <Button
        sx={{ mr: 1, mb: 1 }}
        disabled={!isFormChanged}
        onClick={saveChanges}
      >
        {ProjectEditPageText.ButtonSave}
      </Button>
    </Fragment>
  );
};

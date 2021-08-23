import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { ProjectEditPageText } from '../../../text';
import { ProjectPageEdit } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { FormProject } from '../../../modules/components/FormProject';

export const EditPresentation = ({
  project,
  onProjectChange,
  isFormChanged,
  saveChanges,
}: ProjectPageEdit) => (
  <Fragment>
    <SectionHeader
      title={ProjectEditPageText.PageHeader}
      subtitle={ProjectEditPageText.PageSubHeader}
      isButton={false}
    />
    <FormProject project={project} onProjectChange={onProjectChange} />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormChanged}
      onClick={saveChanges}
    >
      {ProjectEditPageText.ButtonSave}
    </Button>
  </Fragment>
);

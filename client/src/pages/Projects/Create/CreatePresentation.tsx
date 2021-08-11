import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { ProjectCreatePageText } from '../../../text';
import { ProjectPageCreate } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormProject } from '../../../modules/components/FormProject';

export const CreatePresentation = ({
  project,
  onProjectChange,
  isFormComplete,
  saveChanges,
}: ProjectPageCreate) => (
  <Fragment>
    <PageHeader
      title={ProjectCreatePageText.PageHeader}
      subtitle={ProjectCreatePageText.PageSubHeader}
      isButton={false}
    />
    <FormProject project={project} onProjectChange={onProjectChange} />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {ProjectCreatePageText.ButtonSave}
    </Button>
  </Fragment>
);

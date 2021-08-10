import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateProjectPageText } from '../../../text';
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
      title={CreateProjectPageText.PageHeaderText}
      subtitle={CreateProjectPageText.PageSubHeaderText}
      isButton={false}
    />
    <FormProject project={project} onProjectChange={onProjectChange} />
    <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
      {CreateProjectPageText.SaveButtonText}
    </Button>
  </Fragment>
);

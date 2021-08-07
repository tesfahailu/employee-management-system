import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateProjectPageText } from '../../../text';
import { CreateProjectType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormProjects } from '../../../modules/components/FormProjects';

export const CreatePresentation = ({
  project,
  onProjectChange,
  isFormComplete,
  saveChanges,
}: CreateProjectType) => {
  return (
    <Fragment>
      <PageHeader
        title={CreateProjectPageText.PageHeaderText}
        subtitle={CreateProjectPageText.PageSubHeaderText}
        isButton={false}
      />
      <FormProjects project={project} onProjectChange={onProjectChange} />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {CreateProjectPageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};

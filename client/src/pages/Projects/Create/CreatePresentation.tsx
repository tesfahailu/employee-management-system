import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateProjectPageText } from '../../../text';
import { CreateProjectType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardProjects } from '../../../modules/components/CardProjects';

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
      <CardProjects project={project} onProjectChange={onProjectChange} />
      <Button sx={{ mt: 1 }} disabled={!isFormComplete} onClick={saveChanges}>
        {CreateProjectPageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};

import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditProjectPageText } from '../../../text';
import { EditProjectType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormProjects } from '../../../modules/components/FormProjects';

export const EditPresentation = ({
  project,
  onProjectChange,
  isFormChanged,
  saveChanges,
}: EditProjectType) => {
  return (
    <Fragment>
      <PageHeader
        title={EditProjectPageText.PageHeaderText}
        subtitle={EditProjectPageText.PageSubHeaderText}
        isButton={false}
      />
      <FormProjects project={project} onProjectChange={onProjectChange} />
      <Button
        sx={{ mr: 1, mb: 1 }}
        disabled={!isFormChanged}
        onClick={saveChanges}
      >
        {EditProjectPageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};

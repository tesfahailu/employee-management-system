import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditProjectPageText } from '../../../text';
import { ProjectPageEdit } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormProject } from '../../../modules/components/FormProject';

export const EditPresentation = ({
  project,
  onProjectChange,
  isFormChanged,
  saveChanges,
}: ProjectPageEdit) => (
  <Fragment>
    <PageHeader
      title={EditProjectPageText.PageHeaderText}
      subtitle={EditProjectPageText.PageSubHeaderText}
      isButton={false}
    />
    <FormProject project={project} onProjectChange={onProjectChange} />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormChanged}
      onClick={saveChanges}
    >
      {EditProjectPageText.SaveButtonText}
    </Button>
  </Fragment>
);

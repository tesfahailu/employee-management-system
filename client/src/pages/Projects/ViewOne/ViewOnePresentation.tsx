import React, { Fragment } from 'react';
import { ViewProjectPageText } from '../../../text';
import { Project } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

export const ViewOnePresentation: React.FC<{
  project: Omit<Project, 'id'>;
}> = ({ project }) => (
  <Fragment>
    <Fragment>
      <PageHeader
        title={ViewProjectPageText.PageHeaderText}
        subtitle={ViewProjectPageText.PageSubHeaderText}
        isButton={false}
      />
      <CardFormatted
        headerText={ViewProjectPageText.ProjectText}
        buttonText={ViewProjectPageText.EditButtonText}
        onEditButtonClick={() => {}}
        data={project}
      />
    </Fragment>
  </Fragment>
);

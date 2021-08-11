import React, { Fragment } from 'react';
import { ProjectViewPageText } from '../../../text';
import { Project } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';

export const ViewOnePresentation: React.FC<{
  project: Omit<Project, 'id'>;
}> = ({ project }) => (
  <Fragment>
    <Fragment>
      <PageHeader
        title={ProjectViewPageText.PageHeader}
        subtitle={ProjectViewPageText.PageSubHeader}
        isButton={false}
      />
      <CardStyledDisplay
        headerText={ProjectViewPageText.Project}
        buttonText={ProjectViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={project}
      />
    </Fragment>
  </Fragment>
);

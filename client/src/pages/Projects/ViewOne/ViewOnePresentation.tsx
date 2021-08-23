import React, { Fragment } from 'react';
import { ProjectViewPageText } from '../../../text';
import { Project } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';

export const ViewOnePresentation: React.FC<{
  project: Omit<Project, 'id'>;
}> = ({ project }) => (
  <Fragment>
    <Fragment>
      <SectionHeader
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

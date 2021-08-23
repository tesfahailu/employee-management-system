import React, { Fragment } from 'react';
import { ProjectViewPageText } from '../../../text';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';
import { project } from './services';

export const SectionProject = () => (
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

import React, { Fragment } from 'react';
import { ProjectsViewPageText } from '../../../text';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { SectionProject } from './SectionProject';

export const ViewAll = () => {
  return (
    <Fragment>
      <SectionHeader
        title={ProjectsViewPageText.PageHeader}
        subtitle={ProjectsViewPageText.PageSubHeader}
        isButton={true}
        buttonText={ProjectsViewPageText.ButtonCreate}
        buttonHref="/projects/create"
      />
      <SectionProject />
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { ProjectViewPageText } from '../../../text';
import { SectionProject } from './SectionProject';

export const ViewOne = () => {
  return (
    <Fragment>
      <SectionHeader
        title={ProjectViewPageText.PageHeader}
        subtitle={ProjectViewPageText.PageSubHeader}
        isButton={false}
      />
      <SectionProject />
    </Fragment>
  );
};

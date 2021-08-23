import React, { Fragment } from 'react';
import { SectionRole } from './SectionRole';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { RoleViewPageText } from '../../../text';

export const ViewOne = () => {
  return (
    <Fragment>
      <SectionHeader
        title={RoleViewPageText.PageHeader}
        subtitle={RoleViewPageText.PageSubHeader}
        isButton={false}
      />
      <SectionRole />
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { RolesViewPageText } from '../../../text';
import { SectionRole } from './SectionRole';

export const ViewAll = () => (
  <Fragment>
    <SectionHeader
      title={RolesViewPageText.PageHeader}
      subtitle={RolesViewPageText.PageSubHeader}
      isButton={true}
      buttonText={RolesViewPageText.ButtonCreate}
      buttonHref="/roles/create"
    />
    <SectionRole />
  </Fragment>
);

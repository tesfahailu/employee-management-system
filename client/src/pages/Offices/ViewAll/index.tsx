import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { OfficesViewPageText } from '../../../text';
import { SectionOffice } from './SectionOffice';

export const ViewAll = () => (
  <Fragment>
    <SectionHeader
      title={OfficesViewPageText.PageHeader}
      subtitle={OfficesViewPageText.PageSubHeader}
      isButton={true}
      buttonText={OfficesViewPageText.ButtonCreate}
      buttonHref="/offices/create"
    />
    <SectionOffice />
  </Fragment>
);

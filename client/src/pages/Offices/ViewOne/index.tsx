import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { OfficeViewPageText } from '../../../text';
import { SectionOffice } from './SectionOffice';
import { address } from './services';

export const ViewOne = () => {
  const { id, ...spreadAddress } = address;
  return (
    <Fragment>
      <SectionHeader
        title={OfficeViewPageText.PageHeader}
        subtitle={OfficeViewPageText.PageSubHeader}
        isButton={false}
      />
      <SectionOffice />
    </Fragment>
  );
};

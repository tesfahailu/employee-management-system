import React, { Fragment } from 'react';
import { SectionCards } from './SectionCards';
import { EmployeeViewPageText } from '../../../text';
import { SectionHeader } from '../../../modules/components/SectionHeader';

export const ViewOne = () => {
  return (
    <Fragment>
      <SectionHeader
        title={EmployeeViewPageText.PageHeader}
        subtitle={EmployeeViewPageText.PageSubHeader}
        isButton={false}
      />
      <SectionCards />
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { DepartmentViewPageText } from '../../../text';
import { SectionDepartment } from './SectionDepartment';

export const ViewOne = () => {
  return (
    <Fragment>
      <SectionHeader
        title={DepartmentViewPageText.PageHeader}
        subtitle={DepartmentViewPageText.PageSubHeader}
        isButton={false}
      />
      <SectionDepartment />
    </Fragment>
  );
};

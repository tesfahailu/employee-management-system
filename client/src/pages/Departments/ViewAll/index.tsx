import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { DepartmentsViewPageText } from '../../../text';
import { SectionDepartment } from './SectionDepartment';

export const ViewAll = () => {
  return (
    <Fragment>
      <SectionHeader
        title={DepartmentsViewPageText.PageHeader}
        subtitle={DepartmentsViewPageText.PageSubHeader}
        isButton={true}
        buttonText={DepartmentsViewPageText.ButtonCreate}
        buttonHref="/departments/create"
      />
      <SectionDepartment />
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { EmployeesViewPageText } from '../../../text';
import { SectionTable } from './SectionTable';

export const ViewAll = () => {
  return (
    <Fragment>
      <SectionHeader
        title={EmployeesViewPageText.PageHeader}
        subtitle={EmployeesViewPageText.PageSubHeader}
        isButton={true}
        buttonText={EmployeesViewPageText.ButtonCreate}
        buttonHref="/employees/create"
      />
      <SectionTable />
    </Fragment>
  );
};

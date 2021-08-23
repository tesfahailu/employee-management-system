import React, { Fragment } from 'react';
import { DepartmentViewPageText } from '../../../text';
import { Department } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';

interface ViewOnePresentationProps {
  department: Omit<Department, 'id'>;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  department,
}) => (
  <Fragment>
    <SectionHeader
      title={DepartmentViewPageText.PageHeader}
      subtitle={DepartmentViewPageText.PageSubHeader}
      isButton={false}
    />
    <CardStyledDisplay
      headerText={DepartmentViewPageText.Department}
      buttonText={DepartmentViewPageText.ButtonEdit}
      onEditButtonClick={() => {}}
      data={department}
    />
  </Fragment>
);

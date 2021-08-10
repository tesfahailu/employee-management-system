import React, { Fragment } from 'react';
import { ViewDepartmentPageText } from '../../../text';
import { Department } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

interface ViewOnePresentationProps {
  department: Omit<Department, 'id'>;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  department,
}) => (
  <Fragment>
    <PageHeader
      title={ViewDepartmentPageText.PageHeaderText}
      subtitle={ViewDepartmentPageText.PageSubHeaderText}
      isButton={false}
    />
    <CardFormatted
      headerText={ViewDepartmentPageText.DepartmentText}
      buttonText={ViewDepartmentPageText.EditButtonText}
      onEditButtonClick={() => {}}
      data={department}
    />
  </Fragment>
);

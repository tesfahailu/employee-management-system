import React, { Fragment } from 'react';
import { ViewDepartmentPageText } from '../../../text';
import { DepartmentType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

interface ViewOnePresentationProps {
  department: DepartmentType;
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

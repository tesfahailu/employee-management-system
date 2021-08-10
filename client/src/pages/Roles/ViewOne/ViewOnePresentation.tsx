import React, { Fragment } from 'react';
import { ViewRolePageText } from '../../../text';
import { Role } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

interface ViewOnePresentationProps {
  role: Omit<Role, 'id'>;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  role,
}) => (
  <Fragment>
    <PageHeader
      title={ViewRolePageText.PageHeaderText}
      subtitle={ViewRolePageText.PageSubHeaderText}
      isButton={false}
    />
    <CardFormatted
      headerText={ViewRolePageText.RoleText}
      buttonText={ViewRolePageText.EditButtonText}
      onEditButtonClick={() => {}}
      data={role}
    />
  </Fragment>
);
